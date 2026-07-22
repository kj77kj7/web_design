import $ from 'jquery'

/**
 * 참조 HTML(nihilism/index.html)과 동일한 물결 효과.
 * - 각 히어로 배경(.hero-section__bg)에 jquery.ripples 적용 (마우스 추종 + 굴절)
 * - 화면에 보이는 섹션에 1.2초 간격으로 작은 물방울 자동 드롭
 * - 터치 기기 / 좁은 화면(<=768px)에서는 비활성
 *
 * jquery.ripples 는 전역 jQuery 를 참조하므로, 플러그인을 동적으로 불러오기
 * 전에 window.jQuery 를 먼저 설정한다.
 *
 * @returns {Promise<null | (() => void)>} 정리(cleanup) 함수 또는 null
 */
export async function initRipples() {
  if (typeof window === 'undefined') return null

  const isCoarse =
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(max-width: 768px)').matches
  if (isCoarse) return null

  window.jQuery = window.$ = $
  await import('jquery.ripples')

  if (!$.fn.ripples) {
    console.warn('jquery.ripples not loaded')
    return null
  }

  const SELECTOR = '.hero-section__bg'
  const RIPPLE_OPTS = {
    resolution: 512,
    dropRadius: 10,
    perturbance: 0.02,
    interactive: false,
    crossOrigin: '',
  }

  $(SELECTOR).each(function () {
    try {
      $(this).ripples(RIPPLE_OPTS)
    } catch (e) {
      // WebGL 미지원 환경 — 정적 이미지로 fallback
      console.warn('Ripples init failed on element:', e)
    }
  })

  // 자동 드롭: 마우스를 움직이지 않아도 잔잔히 살아 있는 느낌
  const intervalId = setInterval(function () {
    $(SELECTOR).each(function () {
      const $el = $(this)
      if (!$el.data('ripples')) return
      const rect = this.getBoundingClientRect()
      const inView = rect.bottom > 0 && rect.top < window.innerHeight
      if (!inView) return

      const x = Math.random() * $el.outerWidth()
      const y = Math.random() * $el.outerHeight()
      const strength = 0.01 + Math.random() * 0.01
      try {
        $el.ripples('drop', x, y, 10, strength)
      } catch (e) {
        /* noop */
      }
    })
  }, 5000)

  return () => {
    clearInterval(intervalId)
    $(SELECTOR).each(function () {
      try {
        $(this).ripples('destroy')
      } catch (e) {
        /* noop */
      }
    })
  }
}
