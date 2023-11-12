import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import bookingsPageInitialPaths9c0bbResource from '../../resources/bookings-page-initial-paths-9c0bb'
import bookingsPageInitialProps070a6Resource from '../../resources/bookings-page-initial-props-070a6'

const Bookings11 = (props) => {
  return (
    <>
      <div className="bookings11-container">
        <Head>
          <title>Bookings1 - Revnitro</title>
          <meta property="og:title" content="Bookings1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(BookingsEntity) => (
            <>
              <div className="bookings11-container1">
                <h1>{BookingsEntity?.name}</h1>
                <span>{BookingsEntity?.email}</span>
                <span>{BookingsEntity?.phoneno}</span>
              </div>
            </>
          )}
          initialData={props.bookingsEntity}
          persistDataDuringLoading={true}
          key={props?.bookingsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .bookings11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .bookings11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Bookings11.defaultProps = {
  bookingsEntity: [],
}

Bookings11.propTypes = {
  bookingsEntity: PropTypes.array,
}

export default Bookings11

export async function getStaticPaths() {
  try {
    const response = await bookingsPageInitialPaths9c0bbResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await bookingsPageInitialProps070a6Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        bookingsEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
