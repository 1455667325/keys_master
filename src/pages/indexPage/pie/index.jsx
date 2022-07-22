import { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie';
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
        <div id="pie" />
      </div >
    )
  }

  setOptions = () => {
    const myChart = echarts.init(document.getElementById('pie'))
    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    window.addEventListener('resize', () => {
      myChart.resize()
    })
    myChart.setOption(option)
  }
}
export default Index
