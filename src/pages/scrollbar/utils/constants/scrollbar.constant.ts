export const SCROLLBAR_CODE = `
  * {
    --sb-track-color: __TRACK_COLOR__;
    --sb-thumb-color: __THUMB_COLOR__;
    --sb-size: __SIZE__px;
  }
  
  *::-webkit-scrollbar {
    width: var(--sb-size);
  }
  
  *::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: __RADIUS__px;
  }
  
  *::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: __RADIUS__px;
    __THUMB_BORDER__
  }

  @supports not selector(::-webkit-scrollbar) {
    body {
        scrollbar-color: var(--sb-thumb-color)
                       var(--sb-track-color);
    }
  }
`
