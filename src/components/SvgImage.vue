<script>
export default  {
  props: {
    svg: {
      type: String
    },
    color: {
      type: String,
      default: 'purple'
    }
  },
  mounted() {
    this.addListeners();
  },
  beforeUpdate() {
    this.removeListeners();
  },
  updated() {
    this.addListeners();
  },
  beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    addListeners() {
      this.addPathListeners();
      this.addGroupListeners();
    },
    removeListeners() {
      this.removePathListeners();
      this.removeGroupListeners();
    },
    addPathListeners() {
      let paths = this.$el.querySelectorAll('path')
      paths.forEach(path => {
        path.addEventListener("click", this.fill)
      })
    },
    addGroupListeners() {
      let groups = this.$el.querySelectorAll('g')
      groups.forEach(group => {
        group.addEventListener("click", this.fill)
      })
    },
    removePathListeners() {
      let paths = this.$el.querySelectorAll('path')
      paths.forEach(path => {
        path.addEventListener("click", this.fill)
      })
    },
    removeGroupListeners() {
      let groups = this.$el.querySelectorAll('g')
      groups.forEach(group => {
        group.removeEventListener("click", this.fill)
      })
    },
    fill(event) {
      event.target.style.fill = this.color;
    }
  },
  render: function(createElement) {
    var self = this
    return createElement(
      'div', {
        domProps: {
          innerHTML: atob(self.svg.split(',')[1])        
        }
      })
  },
}
</script>
