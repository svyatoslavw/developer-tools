export const SCROLLBAR_CODE = `* {
    --scroll-track-color: __TRACK_COLOR__;
    --scroll-thumb-color: __THUMB_COLOR__;
    --scroll-size: __SIZE__px;
  }
  
  *::-webkit-scrollbar {
    width: var(--scroll-size);
  }
  
  *::-webkit-scrollbar-track {
    background: var(--scroll-track-color);
    border-radius: __RADIUS__px;
  }
  
  *::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb-color);
    border-radius: __RADIUS__px;
    __THUMB_BORDER__
  }

  @supports not selector(::-webkit-scrollbar) {
    body {
        scrollbar-color: var(--scroll-thumb-color)
                       var(--scroll-track-color);
    }
  }
`
