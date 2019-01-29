<template>
    <b-container fluid>
        <!-- User Interface controls -->
        <AddUserForm />
        <b-row>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Filter" class="mb-0">
                    <b-input-group>
                        <b-form-input v-model="filter" placeholder="Type to Search" />
                        <b-input-group-append>
                            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Sort" class="mb-0">
                    <b-input-group>
                        <b-form-select v-model="sortBy" :options="sortOptions">
                            <option slot="first" :value="null">-- none --</option>
                        </b-form-select>
                        <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Sort direction" class="mb-0">
                    <b-input-group>
                        <b-form-select v-model="sortDirection" slot="append">
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                            <option value="last">Last</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Per page" class="mb-0">
                    <b-form-select :options="pageOptions" v-model="perPage" />
                </b-form-group>
            </b-col>
        </b-row>
        <!-- Main table element -->
        <b-table show-empty
                 stacked="md"
                 :items="getUsers"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 :sort-direction="sortDirection"
                 @filtered="onFiltered"
        >
            <template slot="name" slot-scope="row">{{row.value}}</template>
            <template slot="email" slot-scope="row">{{row.value}}</template>
            <template slot="role" slot-scope="row">{{row.item.role_id === 1 ? 'Admin' : 'User'}}</template>
            <template slot="created" slot-scope="row">{{formatDate(row.item.created)}}</template>
            <template slot="actions" slot-scope="row">
                <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                <b-button variant="danger" size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
                    Delete user
                </b-button>
            </template>
        </b-table>
        <b-row>
            <b-col md="6" class="my-1">
                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
            </b-col>
        </b-row>
        <!-- Info modal -->
        <b-modal id="modalInfo" ref="myModalRef" hide-footer @hide="resetModal" :title="modalInfo.title" ok-only>
            <pre>{{ modalInfo.content }}</pre>
            <b-button class="modal-button" variant="danger" style="" @click="onDelete">Yes</b-button>
            <b-button class="modal-button" variant="outline-secondary" @click="hideModal">Cancel</b-button>
        </b-modal>
    </b-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import moment from 'moment';
    import AddUserForm from './AddUserForm';

    export default {
        name: 'UserList',
        components: {AddUserForm},
        data (){
            return {
                fields: [
                    { key: 'name', label: 'Person Name', sortable: true, sortDirection: 'desc' },
                    { key: 'email', label: 'Email', sortable: true, 'class': 'text-center' },
                    { key: 'role', label: 'Role' },
                    { key: 'created', label: 'Created date', sortable: true },
                    { key: 'actions', label: 'actions'}
                ],
                filter: null,
                sortBy: 'name',
                sortDesc: false,
                totalRows: this.$store.getters.getUsers.length,
                sortDirection: 'asc',
                perPage: 5,
                currentPage: 1,
                pageOptions: [ 5, 10, 15 ],
                modalInfo: {title: '', content: '', userId: null},
                userInfo: {name: '', email: '', password: '', role: null},
                options: [
                    { value: 1, text: 'Admin' },
                    { value: 2, text: 'User' },
                ]
            }
        },
        computed: {
            ...mapGetters(['getUsers']),
            sortOptions () {
                // Create an options list from our fields
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => { return { text: f.label, value: f.key } })
            },
        },
        methods: {
            ...mapActions(['deleteUser']),
            info (item) {
                this.modalInfo.title = 'Delete user';
                this.modalInfo.content = `Are you sure you want to delete the user: ${item.name}?`;
                this.modalInfo.userId = item.user_id;
                this.showModal();
            },
            onDelete() {
                this.deleteUser(this.modalInfo.userId);
                this.hideModal();
            },
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },
            formatDate(date) {
                return moment(date).format('LLLL');
            },
            resetModal() {
                this.modalInfo.title = '';
                this.modalInfo.content = '';
            },
            showModal () {
                this.$refs.myModalRef.show()
            },
            hideModal () {
                this.$refs.myModalRef.hide();
                this.resetModal();
            }
        }
    }
</script>

<style scoped>
    .modal-button {
        margin-right: 10px;
        width: 100px;
    }
</style>
