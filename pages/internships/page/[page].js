import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import internshipsPageInitialPaths66871Resource from '../../../resources/internships-page-initial-paths-66871'
import internshipsPageInitialPropsC10e9Resource from '../../../resources/internships-page-initial-props-c10e9'

const Internships1 = (props) => {
  return (
    <>
      <div className="internships1-container">
        <Head>
          <title>Internships - Revnitro</title>
          <meta property="og:title" content="Internships - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(InternshipsEntities) => (
                  <>
                    <div className="internships1-container1">
                      <h1>{InternshipsEntities?.name}</h1>
                      <span>{InternshipsEntities?.name}</span>
                      <span>{InternshipsEntities?.age}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.internshipsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .internships1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .internships1-container1 {
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

Internships1.defaultProps = {
  internshipsEntities: [],
}

Internships1.propTypes = {
  internshipsEntities: PropTypes.array,
}

export default Internships1

export async function getStaticPaths() {
  try {
    const response = await internshipsPageInitialPaths66871Resource({})
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
    const response = await internshipsPageInitialPropsC10e9Resource({
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
        internshipsEntities: response,
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
