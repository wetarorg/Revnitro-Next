import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import coursesPageInitialProps6eb32Resource from '../../resources/courses-page-initial-props-6eb32'

const Courses1 = (props) => {
  return (
    <>
      <div className="courses1-container">
        <Head>
          <title>Courses1 - Revnitro</title>
          <meta property="og:title" content="Courses1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(CoursesEntities) => (
                  <>
                    <div className="courses1-container1">
                      <h1>{CoursesEntities?.Title}</h1>
                      <span>{CoursesEntities?.Title}</span>
                      <span>{CoursesEntities?.description}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.coursesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .courses1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .courses1-container1 {
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

Courses1.defaultProps = {
  coursesEntities: [],
}

Courses1.propTypes = {
  coursesEntities: PropTypes.array,
}

export default Courses1

export async function getStaticProps(context) {
  try {
    const response = await coursesPageInitialProps6eb32Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        coursesEntities: response,
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
