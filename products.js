// DR Scripts — product catalog
// To add a new product: copy an object below, fill in the fields.
//
// image      : path to a screenshot/thumbnail, e.g. "images/fusionalign.png"
//              1) Add the image file to the /images folder in the repo (upload via GitHub "Add file")
//              2) Point this field at it. Leave as null to show no image.
//              Recommended size: 800x500px or similar 16:10 ratio, under 300KB (jpg/png/webp).
//
// demoVideo  : link to a YouTube (or Vimeo) video showing the tool in action.
//              1) Upload the demo video to YouTube (can be "Unlisted" so it's not searchable, but the link still works)
//              2) Paste the normal video URL here, e.g. "https://youtu.be/xxxxxxx"
//              Do NOT upload video files directly into the GitHub repo — they're too large for this setup.
//              Leave as null to hide the "Watch demo" link.
//
// paddlePriceId: get this from Paddle Dashboard > Catalog > Prices (looks like "pri_01xxxxx")
// Leave paddlePriceId as null until the product is live in Paddle — the button will show "Coming Soon".

const PRODUCTS = [
  {
    id: "fusionalign",
    name: "FusionAlign",
    tag: "SCRIPT",
    price: 19,
    oldPrice: null,
    bestSeller: true,
    image: null,
    demoVideo: null,
    description: "Align edges, centers, and distribute Fusion nodes with pixel precision. Comp-center in one click.",
    features: ["Spatial alignment", "Distribute tools", "License-key protected"],
    paddlePriceId: null
  },
  {
    id: "batchinsert",
    name: "BatchInsert",
    tag: "SCRIPT",
    price: 9,
    oldPrice: null,
    bestSeller: false,
    image: null,
    demoVideo: null,
    description: "Insert any Fusion tool into multiple selected nodes at once. No more repeating the same drag.",
    features: ["Native tool picker", "Auto-connect on insert", "Windows & Mac"],
    paddlePriceId: null
  },
  {
    id: "pasteimage",
    name: "Paste Image to Resolve",
    tag: "SCRIPT",
    price: 12,
    oldPrice: null,
    bestSeller: false,
    image: null,
    demoVideo: null,
    description: "Paste clipboard images straight into the Media Pool. Skip the save-then-import round trip.",
    features: ["Clipboard to Media Pool", "One shortcut", "Works with any image copy"],
    paddlePriceId: null
  },
  {
    id: "gridbuilder",
    name: "Grid Builder",
    tag: "SCRIPT",
    price: 12,
    oldPrice: null,
    bestSeller: false,
    image: null,
    demoVideo: null,
    description: "Generate radial or rectangular grids in Fusion instantly — no manual duplicating and positioning.",
    features: ["Radial grid mode", "Rectangular grid mode", "Adjustable rows, columns & spacing"],
    paddlePriceId: null
  },
  {
    id: "textbatch",
    name: "Text+ Batch Property Editor",
    tag: "SCRIPT",
    price: 15,
    oldPrice: null,
    bestSeller: false,
    image: null,
    demoVideo: null,
    description: "Edit Text+ properties across every clip on the timeline in one pass, instead of node by node.",
    features: ["Timeline-wide batch edit", "Font, size, color, position", "Undo-safe"],
    paddlePriceId: null
  },
  {
    id: "fusionflow",
    name: "FusionFlow",
    tag: "MACRO",
    price: 15,
    oldPrice: null,
    bestSeller: false,
    image: null,
    demoVideo: null,
    description: "Easing presets for Fusion animation — the curve library Fusion doesn't ship with.",
    features: ["Curated easing curves", "One-click apply", "Custom curve editor"],
    paddlePriceId: null
  },
  {
    id: "fusionpanel",
    name: "FusionPanel",
    tag: "PLUGIN",
    price: 25,
    oldPrice: null,
    bestSeller: false,
    image: null,
    demoVideo: null,
    description: "A floating multi-tab panel that keeps your most-used Fusion tools one click away.",
    features: ["Multi-tab layout", "Customizable tool shortcuts", "Stays on top"],
    paddlePriceId: null
  }
];
