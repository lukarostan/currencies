import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January','February','March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'euros',
          backgroundColor: '#ccc999',
          data: [2,3,4,5,4,5,4,4,4,3,4,5,4,5,4,4,3,4,5,4,5,4,4,],
          borderWidth: 0
        }
      ]
    })
  }
}

