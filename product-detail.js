// DR Scripts — product detail page logic
// Runs only on product.html. Reads ?id=<product-id> from the URL and
// renders everything from the matching entry in products.js.

function youtubeEmbedUrl(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/
  ];
  for (const re of patterns) {
    const match = url.match(re);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById("product-detail");

  if (!product) {
    container.innerHTML = `<p>Product not found. <a href="index.html" style="color:var(--teal);">Back to all products</a></p>`;
    document.title = "Product not found | DR Scripts";
    return;
  }

  document.title = `${product.name} | DR Scripts`;

  const imageHtml = product.image
    ? `<img src="${product.image}" alt="${product.name} screenshot">`
    : `<div class="image-placeholder large">${product.name}</div>`;

  const embedUrl = youtubeEmbedUrl(product.demoVideo);
  const videoHtml = embedUrl
    ? `<div class="video-wrap" id="demo-video"><iframe src="${embedUrl}" title="${product.name} demo video" allowfullscreen loading="lazy"></iframe></div>`
    : "";
  const videoArrowHtml = embedUrl
    ? `<a href="#demo-video" class="video-arrow" title="Watch demo video">→</a>`
    : "";

  const featuresHtml = product.features.map(f => `<li>${f}</li>`).join("");
  const priceHtml = product.oldPrice
    ? `<span class="old-price">$${product.oldPrice}</span><span class="price-badge">$${product.price}</span>`
    : `<span class="price-badge">$${product.price}</span>`;

  container.innerHTML = `
    <a href="index.html" class="back-link">← All products</a>
    <div class="detail-grid">
      <div>
        <div class="detail-image">${imageHtml}${videoArrowHtml}</div>
        ${videoHtml}
      </div>
      <div>
        <div class="product-category">${product.tag}</div>
        <h1 class="detail-title">${product.name}</h1>
        <div class="description-box">
          <p class="detail-description">${product.fullDescription || product.description}</p>
        </div>
        <ul class="product-features">${featuresHtml}</ul>
        <div class="detail-buy">
          ${priceHtml}
          <button class="buy large" onclick="buyNow('${product.paddlePriceId}', '${product.name.replace(/'/g, "\\'")}')">
            ${product.paddlePriceId ? "Buy Now" : "Coming Soon"}
          </button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetail();
  initPaddle();
});
