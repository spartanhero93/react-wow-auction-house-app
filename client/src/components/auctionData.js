import React, { Component } from 'react'
import styled from 'styled-components'

class AuctionData extends Component {
  state = {
    realm: '...',
    dataSet: []
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.realms !== nextProps.realms) {
      const realm = nextProps.realms[0], auctions = nextProps.auctions

      this.setState({ realm: realm.name, dataSet: auctions.splice(3) })
    }
  }

  render () {
    console.log(this.state.data)
    return (
      <Wrapper>
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
            <tr>
              <th>Player {'2'}</th>
              <td>Legend27</td>
              <td>DarkSpear</td>
              <td>{'4165344561'}</td>
              <td>{'12344890'}</td>
              <td>{'12343870'}</td>
              <td>{'very long'}</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>3rd period</th>
              <td>&nbsp;</td>
              <td>German</td>
              <td>&nbsp;</td>
              <td>German</td>
              <td>Dutch</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>4th period</th>
              <td>&nbsp;</td>
              <td>English</td>
              <td>&nbsp;</td>
              <td>English</td>
              <td>Dutch</td>
              <td>&nbsp;</td>
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
