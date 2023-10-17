import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import internshipsPageInitialPathsC219aResource from '../../resources/internships-page-initial-paths-c219a'
import internshipsPageInitialProps19cc9Resource from '../../resources/internships-page-initial-props-19cc9'

const Internships11 = (props) => {
  return (
    <>
      <div className="internships11-container">
        <Head>
          <title>Internships1 - Revnitro</title>
          <meta property="og:title" content="Internships1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(InternshipsEntity) => (
            <>
              <div className="internships11-container1">
                <h1>{InternshipsEntity?.name}</h1>
                <span>{InternshipsEntity?.age}</span>
                <span>{InternshipsEntity?.place}</span>
              </div>
            </>
          )}
          initialData={props.internshipsEntity}
          persistDataDuringLoading={true}
          key={props?.internshipsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .internships11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .internships11-container1 {
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

Internships11.defaultProps = {
  internshipsEntity: [],
}

Internships11.propTypes = {
  internshipsEntity: PropTypes.array,
}

export default Internships11

export async function getStaticPaths() {
  try {
    const response = await internshipsPageInitialPathsC219aResource({})
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
    const response = await internshipsPageInitialProps19cc9Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        internshipsEntity: response?.data?.[0],
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
