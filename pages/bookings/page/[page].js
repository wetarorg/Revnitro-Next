import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import bookingsPageInitialPaths7840aResource from '../../../resources/bookings-page-initial-paths-7840a'
import bookingsPageInitialProps51bb2Resource from '../../../resources/bookings-page-initial-props-51bb2'

const Bookings1 = (props) => {
  return (
    <>
      <div className="bookings1-container">
        <Head>
          <title>Bookings - Revnitro</title>
          <meta property="og:title" content="Bookings - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BookingsEntities) => (
                  <>
                    <div className="bookings1-container1">
                      <h1>{BookingsEntities?.name}</h1>
                      <span>{BookingsEntities?.name}</span>
                      <span>{BookingsEntities?.email}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.bookingsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .bookings1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Bookings1.defaultProps = {
  bookingsEntities: [],
}

Bookings1.propTypes = {
  bookingsEntities: PropTypes.array,
}

export default Bookings1

export async function getStaticPaths() {
  try {
    const response = await bookingsPageInitialPaths7840aResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
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
    const response = await bookingsPageInitialProps51bb2Resource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        bookingsEntities: response,
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
