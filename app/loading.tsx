export default function Loading() {
  return <section className="routeLoading" aria-busy="true" aria-label="Loading page">
    <div className="container">
      <p role="status">Loading your next journey…</p>
      <div className="routeLoadingHeading" aria-hidden="true" />
      <div className="routeLoadingLine" aria-hidden="true" />
      <div className="routeLoadingGrid" aria-hidden="true"><div /><div /><div /></div>
    </div>
  </section>;
}
