module.exports = async function ($) {
  $.page.title = '404'
  return /* HTML */ `
    <div class="inner-width error-page">
      <h1>404</h1>
      <p>Denne siden finnes ikke / This site does not exist</p>
    </div>
  `
}
