import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import internshipsPageInitialPropsE286cResource from '../../resources/internships-page-initial-props-e286c'

const Internships = (props) => {
  return (
    <>
      <div className="internships-container">
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
                    <div className="internships-container1">
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
          .internships-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .internships-container1 {
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

Internships.defaultProps = {
  internshipsEntities: [],
}

Internships.propTypes = {
  internshipsEntities: PropTypes.array,
}

export default Internships

export async function getStaticProps(context) {
  try {
    const response = await internshipsPageInitialPropsE286cResource({
      ...context?.params,
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
