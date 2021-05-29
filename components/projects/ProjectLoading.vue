<template>
  <div>
    <svg
      role="img"
      width="290"
      height="352"
      aria-labelledby="loading-aria"
      viewBox="0 0 290 352"
      preserveAspectRatio="none"
      class="w-full"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style="fill: url('#fill')"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="10" ry="10" width="290" height="159" />
          <rect x="0" y="180" rx="6" ry="6" width="220" height="28" />
          <rect x="0" y="230" rx="4" ry="4" width="270" height="12" />
          <rect x="0" y="254" rx="4" ry="4" width="220" height="12" />
          <rect x="0" y="310" rx="4" ry="4" width="60" height="16" />
          <rect x="150" y="310" rx="4" ry="4" width="140" height="16" />
        </clipPath>
        <linearGradient id="fill">
          <stop id="stop-1" offset="0.599964" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop id="stop-2" offset="1.59996" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop id="stop-3" offset="2.59996" stop-opacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style>
#stop-1,
#stop-3 {
  stop-color: #f3f4f6;
}

#stop-2 {
  stop-color: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  #stop-1,
  #stop-3 {
    stop-color: #374151;
  }

  #stop-2 {
    stop-color: #4b5563;
  }
}
</style>
