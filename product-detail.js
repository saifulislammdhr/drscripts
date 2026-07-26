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

  let mediaHtml;
  if (embedUrl) {
    mediaHtml = `
      <div class="media-carousel" id="media-carousel">
        <div class="carousel-track">
          <div class="carousel-slide">${imageHtml}</div>
          <div class="carousel-slide">
            <iframe src="${embedUrl}" title="${product.name} demo video" allowfullscreen loading="lazy"></iframe>
          </div>
        </div>
        <button class="carousel-arrow right" onclick="slideCarousel('video')" title="Watch demo video">→</button>
        <button class="carousel-arrow left" onclick="slideCarousel('image')" title="Back to preview">←</button>
      </div>`;
  } else {
    mediaHtml = `<div class="detail-image">${imageHtml}</div>`;
  }

  const featuresHtml = product.features.map(f => `<li>${f}</li>`).join("");
  const priceHtml = product.price === 0
    ? `<span class="price-badge">Free</span>`
    : product.oldPrice
      ? `<span class="old-price">$${product.oldPrice}</span><span class="price-badge">$${product.price}</span>`
      : `<span class="price-badge">$${product.price}</span>`;

  const detailButtonHtml = product.price === 0
    ? (product.downloadUrl
        ? `<button class="buy large" onclick="downloadFree('${product.downloadUrl}', '${product.name.replace(/'/g, "\\'")}')">Download Free</button>`
        : `<button class="buy large" disabled>Coming Soon</button>`)
    : `<button class="buy large" onclick="buyNow('${product.paddlePriceId}', '${product.name.replace(/'/g, "\\'")}')">
        ${product.paddlePriceId ? "Buy Now" : "Coming Soon"}
      </button>`;

  container.innerHTML = `
    <a href="index.html" class="back-link">← All products</a>
    <div class="detail-grid">
      <div>
        ${mediaHtml}
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
          ${detailButtonHtml}
        </div>
      </div>
    </div>
  `;
}

function slideCarousel(target) {
  const el = document.getElementById("media-carousel");
  if (!el) return;
  if (target === "video") {
    el.classList.add("on-video");
  } else {
    el.classList.remove("on-video");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetail();
  initPaddle();
});
