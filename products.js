// DR Scripts product catalog
// To add a new product: copy an object below, fill in the fields. That's it -
// it will automatically appear on the homepage grid AND get its own detail
// page at product.html?id=<id> - no other file needs to change.
//
// image        : path to a screenshot of the tool, shown on the card AND as
//                the large hero image on the detail page.
//                Recommended size: 1920x1080 (16:9) works well. Just compress
//                the file first (aim under ~400KB) so the page loads fast -
//                any online "compress png/jpg" tool works, or export as webp.
//                How to add: upload the image file to the repo root (same
//                place as index.html), then set this field to its filename,
//                e.g. "fusionalign.png". Leave as null to show no image.
//
// demoVideo    : link to a YouTube video showing the tool in action, embedded
//                on the detail page. Upload the video to YouTube (can be
//                "Unlisted" so it won't show in search, the link still works),
//                then paste the normal video URL here, e.g. "https://youtu.be/xxxxxxx".
//                Do not upload video files into the GitHub repo directly.
//                Leave as null to hide the video section.
//
// description     : short one-line summary, shown on the detail page under the title.
// fullDescription : longer paragraph for the detail page. Leave null to just
//                    reuse "description" if you don't have longer text yet.
//
// paddlePriceId: from Paddle Dashboard > Catalog > Prices (looks like "pri_01xxxxx").
// Leave as null until the product is live in Paddle - the button will show "Coming Soon".
//
// FREE PRODUCTS: set price: 0. Paddle doesn't handle $0 purchases, so free
// products skip Paddle entirely - set "downloadUrl" to a direct file link
// (e.g. a GitHub Release asset, Google Drive share link, Dropbox link) and
// the button will say "Download Free" and go straight there. paddlePriceId
// is ignored when price is 0.

const PRODUCTS = [
  {
    id: "fusionalign",
    name: "FusionAlign",
    tag: "SCRIPT",
    price: 10,
    oldPrice: null,
    image: Images/Fusion align.png,
    demoVideo: null,
    downloadUrl: null,
    description: "Align edges, centers, and distribute Fusion nodes with pixel precision.",
    fullDescription: "Align edges, centers, and distribute Fusion nodes with pixel precision. Comp-center in one click. Built for editors who are tired of nudging nodes by eye.",
    features: ["Spatial alignment", "Distribute tools", "License-key protected"],
    paddlePriceId: null
  },
  {
    id: "batchinsert",
    name: "BatchInsert",
    tag: "SCRIPT",
    price: 05,
    oldPrice: null,
    image: Images/Batch insert.png,
    demoVideo: null,
    downloadUrl: null,
    description: "Insert any Fusion tool into multiple selected nodes at once.",
    fullDescription: "Insert any Fusion tool into multiple selected nodes at once. No more repeating the same drag-and-connect for every single node in your comp.",
    features: ["Native tool picker", "Auto-connect on insert", "Windows & Mac"],
    paddlePriceId: null
  },
  {
    id: "pasteimage",
    name: "Paste Image to Resolve",
    tag: "SCRIPT",
    price: 0,
    oldPrice: null,
    image: null,
    demoVideo: null,
    downloadUrl: null,
    description: "Paste clipboard images straight into the Media Pool.",
    fullDescription: "Paste clipboard images straight into the Media Pool. Skip the save-then-import round trip entirely - copy an image anywhere, paste it directly into Resolve.",
    features: ["Clipboard to Media Pool", "One shortcut", "Works with any image copy"],
    paddlePriceId: null
  },
  {
    id: "gridbuilder",
    name: "Grid Builder",
    tag: "MACRO",
    price: 10,
    oldPrice: null,
    image: null,
    demoVideo: null,
    downloadUrl: null,
    description: "Generate radial or rectangular grids in Fusion instantly.",
    fullDescription: "Generate radial or rectangular grids in Fusion instantly, no manual duplicating and repositioning. Adjust rows, columns and spacing live.",
    features: ["Radial grid mode", "Rectangular grid mode", "Adjustable rows, columns & spacing"],
    paddlePriceId: null
  },
  {
    id: "pairconnect",
    name: "Pair Connect",
    tag: "SCRIPT",
    price: 05,
    oldPrice: null,
    image: null,
    demoVideo: null,
    downloadUrl: null,
    description: "Connect multiple Fusion nodes at once, with the mode detected automatically.",
    fullDescription: "Connect multiple Fusion nodes at once. Pair Connect auto-detects which of three modes you need: Pair Mode (N to N) for two equal-sized groups matched by position, Fan-out Mode (1 to N) to send one source into the same input on many targets, and Fan-in Mode (N to 1) to wire many sources into multiple inputs on one target. Select your sources, Set Source, select your targets, Set Target, then Connect.",
    features: ["Pair Mode: 1-to-1 by position", "Fan-out Mode: one source to many targets", "Fan-in Mode: many sources into one target"],
    paddlePriceId: null
  },
  {
    id: "fusionpivot",
    name: "Fusion Pivot",
    tag: "SCRIPT",
    price: 0,
    oldPrice: null,
    image: null,
    demoVideo: null,
    downloadUrl: null,
    description: "Set a Transform node's pivot to any of 9 fixed positions in one click.",
    fullDescription: "Set a Transform node's pivot (anchor point) to any of 9 fixed positions instantly: top-left, top-center, top-right, middle-left, center, middle-right, bottom-left, bottom-center, or bottom-right. The layer's visual position never shifts, Fusion Pivot automatically compensates the Center value regardless of Size or Angle. Useful for rotating or scaling from a corner or edge, setting a pivot without dragging it by hand, and updating multiple selected nodes at once.",
    features: ["9 fixed pivot positions", "Position stays visually unchanged", "Works on multiple selected nodes at once"],
    paddlePriceId: null
  }
];
