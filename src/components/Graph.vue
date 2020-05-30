<script>
import data from '../data'
import { jobStats } from '../utils'
import { Line } from 'vue-chartjs'
import randomcolor from 'randomcolor'

export default {
  extends: Line,
  props: [
    'techs'
  ],
  watch: {
    techs: function() {
      const datasets = this.data.datasets.filter(e => this.techs.includes(e.id))

      // labels don't change (yet) so no need to set new labels

      this.renderChart({
        labels: this.data.labels,
        datasets
      }, {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [ {
            gridLines: {
              display: true
            },
          }]
        }
      })
    }
  },
  data: function() {
    return {
      data: this.formatData(data)
    }
  },
  methods: {
    formatData(data) {
      const formattedData = {}

      Object.keys(data).forEach(key => {
        formattedData[key] = jobStats(data[key])
      })

      const datasets = this.techs.map(e => ({ id: e, data: [], fill: false, borderColor: randomcolor() }))

      Object.keys(formattedData).forEach(m => {
        this.techs.forEach(t => {
          const count = formattedData[m][t].count
          const label = formattedData[m][t].label

          const index = datasets.indexOf(datasets.find(e => e.id === t))

          datasets[index].label = label
          datasets[index].data.push(count)
        })
      })

      return {
        labels: Object.keys(formattedData),
        datasets
      }
    }
  },
  mounted () {
    this.addPlugin({
      beforeInit: function(chart) {
        chart.legend.afterFit = function() {
          this.height += 20
        }
      }
    })
    // Overwriting base render method with actual data.
    this.renderChart({
      ...this.data
    }, {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }]
      }
    })
  }
}
</script>
