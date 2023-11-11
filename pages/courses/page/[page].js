import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import coursesPageInitialPathsE33c6Resource from '../../../resources/courses-page-initial-paths-e33c6'
import coursesPageInitialPropsA5658Resource from '../../../resources/courses-page-initial-props-a5658'

const Courses11 = (props) => {
  return (
    <>
      <div className="courses11-container">
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
                    <div className="courses11-container1">
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
          .courses11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .courses11-container1 {
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

Courses11.defaultProps = {
  coursesEntities: [],
}

Courses11.propTypes = {
  coursesEntities: PropTypes.array,
}

export default Courses11

export async function getStaticPaths() {
  try {
    const response = await coursesPageInitialPathsE33c6Resource({})
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
    const response = await coursesPageInitialPropsA5658Resource({
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
