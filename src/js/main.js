$("header").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});

// to destroy
$("header").headroom("destroy");
