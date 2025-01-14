import React from 'react'
import { Query } from 'react-apollo'
import { QUERY_GET_ALL_DISTRICTS } from 'queries/gql'
import { Loading } from 'components/atoms/Loading'
import DistrictsTable from 'components/molecules/district/DistrictsTable'

const DistrictAllPage = props => {
  const {
    match: {
      params: { year },
    },
  } = props

  return (
    <Query query={QUERY_GET_ALL_DISTRICTS} variables={{ year }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return `Error! ${error}`

        const districts = data.dcd_districts

        return <DistrictsTable districts={districts} year={year} />
      }}
    </Query>
  )
}

export default DistrictAllPage
