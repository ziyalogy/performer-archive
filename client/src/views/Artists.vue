<template v-for="artist in artists" :key="artist._id" :items="artists">
  <v-container>
    <v-card>
      <v-card-title class="font-weight-bold secondary--text">
        Indexed {{ artists.length }} perfomers
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        loading
        loading-text="Populating artists data..."
        :headers="headers"
        :items="artists"
        :search="search"
        :items-per-page="25"
      >
        <template #item._id="{ item }">
          <v-btn
            :to="`artist/${item._id}`"
            flat
            outlined
            class="ml-4"
            small
            color="primary darken-2"
          >
            View
          </v-btn>
        </template>

        <template v-slot:footer>
          <v-container>
            <td>
              <v-alert width="100%"
                v-model="alert"
                border="bottom"
                close-text="Close Alert"
                color="primary"
                dark
                dismissible
                class="dark--text darken-1"
              >
                A portion of this data was sourced from the official list of
                registered members of the
                <a
                  class="text-decoration-none"
                  target="new" color="primary lighten-2"
                  href="https://uprs.go.ug/members-list/"
                  >Uganda Performing Rights Society</a
                ></v-alert
              >
            </td>
          </v-container>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'First Name',
          align: 'start',
          sortable: true,
          value: 'firstName',
        },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Stage Name', value: 'middleName' },
        { text: 'Category', value: 'category' },
        { text: 'Location', value: 'district' },
        { text: 'Band', value: 'band' },
        { text: 'Profile', value: '_id' },
      ],
      artists: [],
    };
  },

  async created() {
    this.artists = await API.getAllArtists();
  },
};
</script>
