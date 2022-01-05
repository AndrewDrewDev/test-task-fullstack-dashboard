import { CardDataItemProps } from '../components/CardData/CartDataItem'
import React from 'react'
import { useGetAnalyticsData } from './useGetAnalyticsData'

const useGetPropsForCardSection = () => {
  const data = useGetAnalyticsData()

  const SearchesProps: CardDataItemProps = {
    svgIcon: (
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8719 0.597C15.6836 0.22875 15.3178 0 14.9156 0H1.08284C0.68139 0 0.314845 0.22875 0.126481 0.597C-0.0633372 0.969 -0.0378827 1.4145 0.191936 1.76025L5.75266 10.1453C5.79484 10.209 5.81739 10.2825 5.81739 10.359V16.8757C5.81739 17.496 6.30684 18 6.9083 18C7.10394 18 7.29666 17.9445 7.46757 17.8388L9.65303 16.4865C9.97884 16.284 10.181 15.915 10.181 15.5235V10.359C10.181 10.2825 10.2036 10.209 10.2465 10.1445L15.8065 1.761C16.0363 1.41525 16.0618 0.969 15.8719 0.597Z"
          fill="white"
        />
      </svg>
    ),
    mainTitle: 'Searches',
    errorsYesterday: data.searches_previous_last_3days,
    errorsLastFriday: data.searches_previous_yesterday,
    detailsTitle: ['Mobile traffic: 100%', 'Web traffic: 100%'],
    detailsDescription: 'You get 100% traffic on mobile and desktop devices.',
    helpLinks: ['Searches', 'Pessimisation'],
    label: '5%',
  }

  const ClickProps: CardDataItemProps = {
    svgIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 7.5V11.24C8.03998 10.43 7.25 9.06 7.25 7.5C7.25 5.00999 9.26001 3 11.75 3C14.24 3 16.25 5.00999 16.25 7.5C16.25 9.06 15.46 10.43 14.25 11.24V7.5C14.25 6.12 13.13 5 11.75 5C10.37 5 9.25 6.12 9.25 7.5ZM14.55 13.61L19.09 15.87C19.62 16.09 20 16.63 20 17.25C20 17.31 19.99 17.38 19.98 17.45L19.23 22.72C19.12 23.45 18.54 24 17.79 24H11C10.59 24 10.21 23.83 9.94 23.56L5 18.62L5.78998 17.82C5.98999 17.62 6.27002 17.49 6.58002 17.49C6.64001 17.49 6.69116 17.4989 6.74231 17.5078C6.76782 17.5122 6.79333 17.5167 6.82001 17.52L10.25 18.24V7.5C10.25 6.67 10.92 6 11.75 6C12.58 6 13.25 6.67 13.25 7.5V13.5H14.01C14.2 13.5 14.38 13.54 14.55 13.61Z"
          fill="white"
        />
      </svg>
    ),
    mainTitle: 'Click',
    errorsYesterday: data.clicks_previous_yesterday,
    errorsLastFriday: data.clicks_previous_last_3days,
    detailsTitle: ['CTR: 0,04%'],
    detailsDescription: 'Conversion from searches  to clicks on all devices.',
    helpLinks: ['CTR', 'Clicks'],
    label: '-13%',
    colorRed: true,
  }

  const BookingProps: CardDataItemProps = {
    svgIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V2H2L5.59497 9.58499L4.245 12.035C4.09003 12.325 4 12.65 4 13C4 14.105 4.89502 15 6 15H18V13H6.42499C6.28497 13 6.17499 12.89 6.17499 12.75C6.17499 12.705 6.185 12.665 6.20502 12.63L7.09998 11H14.55C15.3 11 15.955 10.585 16.3 9.97L19.875 3.48001C19.955 3.34 20 3.17499 20 3C20 2.44501 19.55 2 19 2H4.21503L3.26501 0H0ZM6 16C4.89502 16 4.01001 16.895 4.01001 18C4.01001 19.105 4.89502 20 6 20C7.10498 20 8 19.105 8 18C8 16.895 7.10498 16 6 16ZM14.01 18C14.01 16.895 14.895 16 16 16C17.105 16 18 16.895 18 18C18 19.105 17.105 20 16 20C14.895 20 14.01 19.105 14.01 18Z"
          fill="white"
        />
      </svg>
    ),
    mainTitle: 'Booking',
    errorsYesterday: data.bookings_previous_yesterday,
    errorsLastFriday: data.bookings_previous_last_3days,
    detailsTitle: ['STR: 6.2%', 'Avg. Check: 8 903₽'],
    detailsDescription: 'Conversion from clicks to bookings on all devices.',
    helpLinks: ['STR', 'Bookings', 'Avg. Check'],
    label: '-13%',
  }

  return { SearchesProps, ClickProps, BookingProps }
}

export default useGetPropsForCardSection
