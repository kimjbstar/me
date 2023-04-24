// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
/** 원하는 액션 수집 시점에 호출 */
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
