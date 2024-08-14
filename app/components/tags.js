module.exports = async function ($) {
  return /* html */ `
  <div class="full-width border-row light-background">
    <div class="inner-width-wide">
      <h2 id="tools">${$.t('tags_title')}</h2>
        <p>${$.t('tags_intro')}</p>
        <span class="tag">Javascript</span>
        <span class="tag">Node.js</span>
        <span class="tag">Figma</span>
        <span class="tag">CMS</span>
        <span class="tag">Universell Utforming</span>
        <span class="tag">Designsystemer</span>
        <span class="tag">CSS</span>
        <span class="tag">HTML5</span>
        <span class="tag">UX-design</span>
    </div>
  </div>
  `
}
