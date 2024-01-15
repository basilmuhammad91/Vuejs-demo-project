<template>
  <HeaderWrapper>
    <div class="mx-5 px-5">
      <label class="flex cursor-pointer select-none items-center">
        <div class="relative">
          <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
          <div class="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
          <div
            :class="{ 'translate-x-full !bg-primary': isChecked }"
            class="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"
          ></div>
          Filter completed
        </div>
      </label>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead
                  class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600"
                >
                  <tr>
                    <th scope="col" class="px-6 py-4">#</th>
                    <th scope="col" class="px-6 py-4">User Id</th>
                    <th scope="col" class="px-6 py-4">Title</th>
                    <th scope="col" class="px-6 py-4">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" v-for="item, index in items" :key="index">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index+1 }}</td>
                    <td class="whitespace-nowrap px-6 py-4">{{ item.userId }}</td>
                    <td class="whitespace-nowrap px-6 py-4">{{ item.title }}</td>
                    <td class="whitespace-nowrap px-6 py-4">{{ item.completed ? "Yes" : "No" }}</td>
                  </tr>
                </tbody>
              </table>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </HeaderWrapper>
</template>

<script>
import HeaderWrapper from '../components/HeaderWrapper.vue'
export default {
  data(){
    return {
      isChecked: false,
    };
  },
  mounted() {
    this.$store.dispatch('fetchItems')
  },
  components: {
    HeaderWrapper
  },
  methods: {
    handleCheckboxChange (){
      this.isChecked = !this.isChecked
    }
  },
  computed: {
    items(){
      let items = this.$store.state.items
      if(this.isChecked){
        return items.filter(i => i.completed == true)
      } 
      return items
    }
  }
}
</script>
