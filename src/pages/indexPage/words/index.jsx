import { Component } from 'react'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import './index.less'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.setOptions()
  }

  render () {
    return (
      <div className='charts-container'>
        <div id="bar" />
      </div >
    )
  }

  setOptions = () => {
    const Chart = echarts.init(document.getElementById('bar'))
    const option = {
      title: {
        text: '高频关键词'
      },
      tooltip: {},
      series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        // rotationRange: [-90, 90],
        rotationRange: [-50, 50],
        shape: 'triangle',
        // width: 100,
        // height: 400,
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [
          {
            name: 'Authentication',
            value: 10000,
            textStyle: {
              normal: {
                color: 'black'
              },
              emphasis: {
                color: 'red'
              }
            }
          },
          {
            name: 'Streaming of segmented content',
            value: 6181
          },
          {
            name: 'Amy Schumer',
            value: 4386
          },
          {
            name: 'Jurassic World',
            value: 4055
          },
          {
            name: 'Charter Communications',
            value: 2467
          },
          {
            name: 'Chick Fil A',
            value: 2244
          },
          {
            name: 'Planet Fitness',
            value: 1898
          },
          {
            name: 'Pitch Perfect',
            value: 1484
          },
          {
            name: 'Express',
            value: 1112
          },
          {
            name: 'Home',
            value: 965
          },
          {
            name: 'Johnny Depp',
            value: 847
          },
          {
            name: 'Lena Dunham',
            value: 582
          },
          {
            name: 'Lewis Hamilton',
            value: 555
          },
          {
            name: 'KXAN',
            value: 550
          },
          {
            name: 'Mary Ellen Mark',
            value: 462
          },
          {
            name: 'Farrah Abraham',
            value: 366
          },
          {
            name: 'Rita Ora',
            value: 360
          },
          {
            name: 'Serena Williams',
            value: 282
          },
          {
            name: 'NCAA baseball tournament',
            value: 273
          },
          {
            name: 'Point Break',
            value: 265
          }
        ]
      }]
    }
    window.addEventListener('resize', () => {
      Chart.resize()
    })
    Chart.setOption(option)
  }
}
export default Index
