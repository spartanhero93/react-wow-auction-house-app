import React, { Component } from 'react'
import styled from 'styled-components'

class AuctionData extends Component {
  state = {
    realm: '...',
    dataSet: []
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.realms !== nextProps.realms) {
      const realm = nextProps.realms[0]
      const fullArr = nextProps.auctions
      console.log('next props arr length')
      console.log(fullArr.length)

      const percentOfFullArr = fullArr.splice(fullArr.length / 2)
      console.log('percentOfFill arr length')
      console.log(percentOfFullArr.length)
      this.setState({ realm: realm.name, dataSet: percentOfFullArr })
    }
  }

  render () {
    console.log('state.arr length')
    console.log(this.state.dataSet.length)
    return (
      <Wrapper>
        <h5>{window.innerWidth}</h5>
        <h4>Server: {this.state.realm}</h4>
        <Table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <th>Owner</th>
              <th>Realm </th>
              <th>Item</th>
              <th>Bid</th>
              <th>Buyout</th>
              <th>Time Left</th>
              <th>Sun</th>
            </tr>
            {/* {this.state.dataSet.map((item, index) => {
              return (
                <tr key={index}>
                  <th>Player {index}</th>
                  <td>{item.owner}</td>
                  <td>{item.ownerRealm}</td>
                  <td>{item.item}</td>
                  <td>{item.bid}</td>
                  <td>{item.buyout}</td>
                  <td>{item.timeLeft}</td>
                  <td>&nbsp;</td>
                </tr>
              )
            })} */}

            <tr>
              <th>Player {'1'}</th>
              <td>Legend27</td>
              <td>DarkSpear</td>
              <td>{'4165344561'}</td>
              <td>{'12344890'}</td>
              <td>{'12343870'}</td>
              <td>{'very long'}</td>
              <td>&nbsp;</td>
            </tr>

          </tbody>
        </Table>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 0 8rem;
`
const Table = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 0.8rem;

  td, th {
      border: 1px solid rgb(190,190,190);
      padding: 10px 20px;
    }
  td {
    text-align: center;
  }
  caption {
    padding: 10px;
  }
`
export default AuctionData
