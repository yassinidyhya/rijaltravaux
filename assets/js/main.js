/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
  'use strict';
  let device_width = window.innerWidth;

  var invJs = {
    m: function (e) {
      invJs.d();
      invJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      invJs.beforeAfter();
      invJs.cartDelete();
      invJs.ursorAnimate();
      invJs.odoMeter();
      invJs.stickyHeader();
      invJs.wowActive();
      invJs.swiperJs();
      invJs.salActive();
      invJs.videoActivation();
      invJs.searchOption();
      invJs.cartBarshow();
      invJs.sideBarTwoshow();
      invJs.metismenu();
      invJs.sideMenu();
      invJs.backToTopInit();
      invJs.filterPrice();
      invJs.preloader();
      invJs.onePageNav();
      invJs.serviceHover();
      invJs.countDown();
      invJs.magnificPopupActivation();
      invJs.categoryMenuHover();
      invJs.filterActionButton();
      invJs.showMoreBtn();
      invJs.menuCurrentLink();
      invJs.addtoWishlist();
      invJs.dateUpdate();
      invJs.uploadImage();
      invJs.customSelect();
      invJs.contactForm();
      invJs.checkoutPage();
      invJs.dataCss();
    },

    beforeAfter: function () {
        $(document).ready(function () {

            if ($(".comparison-slider")[0]) {
                let compSlider = $(".comparison-slider");

                compSlider.each(function () {
                    let compSliderWidth = $(this).width() + "px";
                    $(this).find(".resize img").css({ width: compSliderWidth });
                    drags($(this).find(".divider"), $(this).find(".resize"), $(this));
                });

                $(window).on("resize", function () {
                    let compSliderWidth = compSlider.width() + "px";
                    compSlider.find(".resize img").css({ width: compSliderWidth });
                });
            }
        });
        function drags(dragElement, resizeElement, container) {

            let touched = false;
            window.addEventListener('touchstart', function () {
                touched = true;
            });
            window.addEventListener('touchend', function () {
                touched = false;
            });

            dragElement.on("mousedown touchstart", function (e) {

                dragElement.addClass("draggable");
                resizeElement.addClass("resizable");
                //create vars
                let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                let dragWidth = dragElement.outerWidth();
                let posX = dragElement.offset().left + dragWidth - startX;
                let containerOffset = container.offset().left;
                let containerWidth = container.outerWidth();
                let minLeft = containerOffset + 10;
                let maxLeft = containerOffset + containerWidth - dragWidth - 10;

                dragElement.parents().on("mousemove touchmove", function (e) {

                    if (touched === false) {
                        e.preventDefault();
                    }

                    let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                    let leftValue = moveX + posX - dragWidth;

                    if (leftValue < minLeft) {
                        leftValue = minLeft;
                    } else if (leftValue > maxLeft) {
                        leftValue = maxLeft;
                    }

                    let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

                    $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
                        $(this).removeClass("draggable");
                        resizeElement.removeClass("resizable");
                    });

                    $(".resizable").css("width", widthValue);

                }).on("mouseup touchend touchcancel", function () {
                    dragElement.removeClass("draggable");
                    resizeElement.removeClass("resizable");

                });

            }).on("mouseup touchend touchcancel", function (e) {
                dragElement.removeClass("draggable");
                resizeElement.removeClass("resizable");

            });

        }
    },

    cartDelete: function () {
      // All delete buttons select kora
      document.querySelectorAll('.delete-cart').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
              e.preventDefault(); // default anchor action off korar jonne
              const productItem = this.closest('.product-item');
              if (productItem) {
                  productItem.remove(); // item remove hobe
              }
          });
      });

      // All delete buttons select kora
      document.querySelectorAll('.cart-table .remove-btn').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
              e.preventDefault(); // default anchor action off korar jonne
              const productItem = this.closest('tr');
              if (productItem) {
                  productItem.remove(); // item remove hobe
              }
          });
      });

    },


    ursorAnimate: function () {
      
        var myCursor = jQuery(".mouse-cursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "a, button, .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "a, button, .cursor-pointer",
                function () {
                  ($(this).is("a") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }

    },

    odoMeter: function () {
      window.addEventListener('load', function () {
        if (document.querySelector('.odometer')) {
          $(document).ready(function () {
            function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
              );
            }

            function triggerOdometer(element) {
              const $element = $(element);
              if (!$element.hasClass('odometer-triggered')) {
                const countNumber = $element.attr('data-count');
                $element.html(countNumber);
                $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
              }
            }

            function handleOdometer() {
              $('.odometer').each(function () {
                if (isInViewport(this)) {
                  triggerOdometer(this);
                }
              });
            }

            // Check on page load
            handleOdometer();

            // Check on scroll
            $(window).on('scroll', function () {
              handleOdometer();
            });
          });

        }
      });
    },

    // sticky header activation
    stickyHeader: function (e) {

      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.header--sticky').addClass('sticky')
        } else {
          $('.header--sticky').removeClass('sticky')
        }
      })

      $(document).ready(function () {
          var $header = $('.header--sticky.header-sticky-smooth');
          var initialHeight = $header.outerHeight(); // Default header height (with header-top)

          $(window).scroll(function () {
              if ($header.length) {
                  if ($(this).scrollTop() > 150) {
                      // Use always the initial full height
                      $('body').css('padding-top', initialHeight + 'px');
                  } else {
                      $('body').css('padding-top', '0');
                  }
              }
          });
      });


    },

    // waw js activation
    wowActive: function () {
      new WOW().init();
    },

    // All swiper js
    swiperJs: function () {

      $(document).ready(function () {
        var swiper = new Swiper(".tmpSlider", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });

      $(document).ready(function () {
        var swiper = new Swiper(".tmpSlider-team-4", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });

      $(document).ready(function () {
        var swiper = new Swiper(".tmp-slider-active-project-2", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          centeredSlides: true,
          autoplay: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });

      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider", {
          spaceBetween: 30,
          slidesPerView: 2,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 4000,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider2", {
          spaceBetween: 0,
          slidesPerView: 2,
          slidesPerGroup: 1,
          loop: true,
          speed: 1500,
          autoHeight: true,
          autoplay: {
            delay: 5000,
          },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider3", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 4000,
          },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpBrandSlider", {
          spaceBetween: 30,
          slidesPerView: 6,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: false,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 6,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpBrandSlider-al.style-box", {
          spaceBetween: 30,
          slidesPerView: 6,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: false,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 6,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 5,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTeamSlider", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: false,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });

      $(document).ready(function () {
        var swiper = new Swiper(".tmpWorkingSlider", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 4000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-events-grid", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 4000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });


      $(document).ready(function () {

        // Check if the sliders exist in the DOM
        if ($(".SlideThumb").length && $(".thumbBannerSlide").length) {
          // Initialize Thumbnail Slider
          var swiperThumb = new Swiper(".SlideThumb", {
            slidesPerView: 3,
            spaceBetween: 0,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            slideToClickedSlide: true,
          });

          // Initialize Main Slider
          var swiperMain = new Swiper(".thumbBannerSlide", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            effect: 'fade',
            autoHeight: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            thumbs: {
              swiper: swiperThumb,
            },
            on: {
              init: function () {
                // Remove last 2 pagination bullets after Swiper fully initialized
                setTimeout(() => {
                  const bullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
                  if (bullets.length > 2) {
                    bullets[bullets.length - 1].remove();
                    bullets[bullets.length - 2].remove();
                  }
                }, 100); // delay 
              },
            },
          });

          swiperMain.on("slideChange", function () {
            const currentIndex = swiperMain.realIndex;
            const paginationBullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
            if (paginationBullets.length) {
              paginationBullets.forEach((bullet, index) => {
                bullet.classList.toggle("swiper-pagination-bullet-active", index === currentIndex);
              });
            }
          });

          // Finally initialize swiper
          swiperMain.init();
        }



      });


      $(document).ready(function () {

        // Check if the sliders exist in the DOM
        if ($(".SlideThumb").length && $(".thumbBannerSlideFour").length) {
          // Initialize Thumbnail Slider
          var swiperThumb = new Swiper(".SlideThumb", {
            slidesPerView: 3,
            spaceBetween: 0,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            slideToClickedSlide: true,
          });

          // Initialize Main Slider
          var swiperMain = new Swiper(".thumbBannerSlideFour", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            effect: 'fade',
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            thumbs: {
              swiper: swiperThumb,
            },
            on: {
              init: function () {
                // Remove last 2 pagination bullets after Swiper fully initialized
                setTimeout(() => {
                  const bullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
                  if (bullets.length > 2) {
                    bullets[bullets.length - 1].remove();
                    bullets[bullets.length - 2].remove();
                  }
                }, 100); // delay 
              },
            },
          });

          swiperMain.on("slideChange", function () {
            const currentIndex = swiperMain.realIndex;
            const paginationBullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
            if (paginationBullets.length) {
              paginationBullets.forEach((bullet, index) => {
                bullet.classList.toggle("swiper-pagination-bullet-active", index === currentIndex);
              });
            }
          });

          // Finally initialize swiper
          swiperMain.init();
        }



      });

      $(document).ready(function () {

        // Check if the sliders exist in the DOM
        if ($(".SlideThumbTwo").length && $(".thumbBannerSlideTwo").length) {
          // Initialize Thumbnail Slider
          var swiperThumb = new Swiper(".SlideThumbTwo", {
            slidesPerView: 3,
            spaceBetween: 0,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            slideToClickedSlide: true,
          });

          // Initialize Main Slider
          var swiperMain = new Swiper(".thumbBannerSlideTwo", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            effect: 'fade',
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            thumbs: {
              swiper: swiperThumb,
            },
            on: {
              init: function () {
                // Remove last 2 pagination bullets after Swiper fully initialized
                setTimeout(() => {
                  const bullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
                  if (bullets.length > 2) {
                    bullets[bullets.length - 1].remove();
                    bullets[bullets.length - 2].remove();
                  }
                }, 100); // delay 
              },
            },
          });

          swiperMain.on("slideChange", function () {
            const currentIndex = swiperMain.realIndex;
            const paginationBullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
            if (paginationBullets.length) {
              paginationBullets.forEach((bullet, index) => {
                bullet.classList.toggle("swiper-pagination-bullet-active", index === currentIndex);
              });
            }
          });

          // Finally initialize swiper
          swiperMain.init();
        }



      });

      $(document).ready(function () {

        // Initialize Main Slider
        var swiperMain = new Swiper(".mySwiper-slider-classic", {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1300,
          loop: true,
          effect: 'fade',
          autoplay: {
            delay: 4000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });



      });

      $(document).ready(function () {

        // Initialize Main Slider
        var swiperMain = new Swiper(".mySwiper-bg-inner-swiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1300,
          loop: true,
          effect: 'fade',
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });



      });

      $(document).ready(function () {

          var swiperThumb = new Swiper(".tmpmySwiperThumb", {
              spaceBetween: 10,
              slidesPerView: 2,
              freeMode: true,
              watchSlidesProgress: true,
          });

          // Initialize Main Slider
          var swiperMain = new Swiper(".thumbBannerSlide-wind", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            effect: 'fade',
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            thumbs: {
              swiper: swiperThumb,
            },
          });

  

      });


      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider2", {
          spaceBetween: 30,
          slidesPerView: 1.9,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 1.9,
            },
            1199: {
              slidesPerView: 1.8,
            },
            991: {
              slidesPerView: 1.2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider4", {
          spaceBetween: 30,
          slidesPerView: 2.4,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 2.4,
            },
            1199: {
              slidesPerView: 1.7,
            },
            991: {
              slidesPerView: 1.7,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider", {
          spaceBetween: 27,
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
              autoplay: {
                delay: 2500,
              },
            },
            575: {
              slidesPerView: 1,
              autoplay: {
                delay: 2500,
              },
            },
            0: {
              slidesPerView: 1,
              autoplay: {
                delay: 2500,
              },
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider3", {
          spaceBetween: 15,
          slidesPerView: 6,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 6,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.5,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTrendingSlider", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpProductSlider", {
          spaceBetween: 24,
          slidesPerView: 6,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".product-pagination",
            type: "progressbar",
          },
          breakpoints: {
            1500: {
              slidesPerView: 6,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      var swiper = new Swiper(".thumbBannerSlide2", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        breakpoints: {
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          }
        },
        navigation: {
          nextEl: ".slide-next",
          prevEl: ".slide-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      $(document).ready(function () {
        // Initialize the first Swiper
        var swiperThumb = new Swiper(".tmp-testimonialSlider3", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          speed: 1800,
          loop: true,
          watchSlidesProgress: true, // Sync progress
          watchSlidesVisibility: true, // Update visibility
          slideToClickedSlide: true,
          pagination: {
            el: ".swiper-pagination-n",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider4", {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          autoHeight: true,
          autoplay: {
            delay: 2500,
          },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".projectSlider4", {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          loopFillGroupWithBlank: true,
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTeamSlider2", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          loop: true,
          speed: 1500,
          // autoplay: {
          //   delay: 3000,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });


      $(document).ready(function () {
        var swiper = new Swiper(".large-gallery-slider", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: false,
          speed: 1500,
          loop: true,
        });
      });


      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-banner-shop", {

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 5500,
          },
          loop: true,
          effect: 'fade',

        });
      });

      $(document).ready(function () {
          //Modal Gallery
          var swiper = new Swiper(".modal-gallery", {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
          });
          var swiper2 = new Swiper(".modal-gallery-big", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });
      });



    },

    // sal animatioin activation
    salActive: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },

    videoActivation: function () {
      $(document).ready(function () {
        $('.popup-youtube, .popup-video').magnificPopup({
          type: 'iframe',
        });
      });
    },

    // search popup
    searchOption: function () {
      $(document).on('click', '#close', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },
    
    // cart bar show
    cartBarshow: function () {
      // Cart Bar show & hide
      $(document).on('click', '.cart-icon', function () {
        $(".cart-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-cart', function () {
        $(".cart-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".cart-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });


    },

    // cart bar show
    sideBarTwoshow: function () {
      // Cart Bar show & hide
      $(document).on('click', '.dot-btn', function () {
        $(".side-bar2").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $(".side-bar2").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".side-bar2").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });



      $(function () {
        $(".button").on("click", function () {
          var $button = $(this);
          var $parent = $button.parent();
          var oldValue = $parent.find('.input').val();

          if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
          } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
              var newVal = parseFloat(oldValue) - 1;
            } else {
              newVal = 1;
            }
          }
          $parent.find('a.add-to-cart').attr('data-quantity', newVal);
          $parent.find('.input').val(newVal);
        });
      });

    },

    // metismenu
    metismenu: function () {
      $('#mobile-menu-active').metisMenu();
    },

    // side menu desktop
    sideMenu: function () {
      $(document).on('click', '#menu-btn', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

    slideNav: function () {
      window.slide = new SlideNav();
    },

    onePageNav: function (e) {
      $(document).ready(function () {
        var nav = $('#nav');
        if (nav.length) {
          $('#nav').onePageNav();
        }
      });
    },

    backToTopInit: function () {
      jQuery(function ($) {
          var scrollTrigger = 100; // show for scroll tiggers
          var shown = false;

          function backToTopHandler() {
              var scrollTop = $(window).scrollTop();

              // Show / Hide elements
              if (scrollTop > scrollTrigger && !shown) {
                  $('.show-on-scroll').addClass('show').removeClass('hide');
                  shown = true;
              }
              if (scrollTop <= scrollTrigger && shown) {
                  $('.show-on-scroll').addClass('hide').removeClass('show');
                  shown = false;
              }

              // Scroll progress (max height = 100px)
              var pageHeight = $(document).height() - $(window).height();
              var progress = (scrollTop / pageHeight) * 100; // % progress
              var maxHeight = 100; // px
              var barHeight = (progress / 100) * maxHeight;

              $(".scrollbar-v").css("height", barHeight + "px");
          }

          // Scroll to top click (float-text + scrollbar-v)
          $('.float-text a, .scrollbar-v').on('click', function (e) {
              e.preventDefault();
              $('html, body').stop(true).animate({ scrollTop: 0 }, 700);
          });

          // Scroll listener
          $(window).on('scroll', backToTopHandler);

      }); 

    },

    filterPrice: function () {
      var filter_price = $('.filter-price');
      if (filter_price.length) {
        var lowerSlider = document.querySelector('#lower');
        var upperSlider = document.querySelector('#upper');

        document.querySelector('#two').value = upperSlider.value;
        document.querySelector('#one').value = lowerSlider.value;

        var lowerVal = parseInt(lowerSlider.value);
        var upperVal = parseInt(upperSlider.value);

        upperSlider.oninput = function () {
          lowerVal = parseInt(lowerSlider.value);
          upperVal = parseInt(upperSlider.value);

          if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
              upperSlider.value = 4;
            }
          }
          document.querySelector('#two').value = this.value
        };

        lowerSlider.oninput = function () {
          lowerVal = parseInt(lowerSlider.value);
          upperVal = parseInt(upperSlider.value);
          if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
              lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
          }
          document.querySelector('#one').value = this.value
        };
      }
    },

    preloader:function(){
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
      });    
    },

    serviceHover: function () {
      $('.single-varticle-product').hover(function () {
        $('.single-varticle-product.active').removeClass('active');
        $(this).addClass('active');
      });
    },

    countDown: function () {
      const countDown = {
        endDate: [],
        validElements: [],
        display: [],
        initialHeight: undefined,
        initialInnerDivMarginTop: undefined,
        originalBorderTopStyle: undefined,

        init: function () {
          $('.countDown').each(function () {
            const regex_match = $(this).text().match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/);
            if (!regex_match) return;

            const end = new Date(regex_match[3], regex_match[2] - 1, regex_match[1], regex_match[4], regex_match[5], regex_match[6]);

            if (end > new Date()) {
              countDown.validElements.push($(this));
              countDown.endDate.push(end);
              countDown.changeTime($(this), end);
              $(this).html(countDown.display.next.map(item => `<div class='container'><div class='a'><div>${item}</div></div></div>`).join(''));
            } else {
              $(this).html("<p class='end'>Sorry, your session has expired.</p>");
            }
          });
        },

        reset: function (element) {
          // Optionally implement any reset animation or class cleanup here
        },

        changeTime: function (element, endTime) {
          if (!endTime) return;

          const now = new Date();
          if (now <= endTime) {
            this.display = {
              last: this.calcTime(endTime.getTime() - now.getTime() + 1000),
              next: this.calcTime(endTime.getTime() - now.getTime())
            };
            this.display.next = this.display.next.map(item => item.toString().padStart(2, '0'));
            this.display.last = this.display.last.map(item => item.toString().padStart(2, '0'));

            element.find('div.container div.a div').each((index, div) => {
              $(div).text(this.display.last[index]);
            });

            this.reset(element.find('div.container'));
          } else {
            element.html("<p class='end'>Sorry, your session has expired.</p>");
          }
        },

        calcTime: function (milliseconds) {
          const secondsTotal = Math.floor(milliseconds / 1000);
          const days = Math.floor(secondsTotal / 86400);
          const hours = Math.floor((secondsTotal % 86400) / 3600);
          const minutes = Math.floor((secondsTotal % 3600) / 60);
          const seconds = secondsTotal % 60;
          return [days, hours, minutes, seconds];
        }
      };

      $(function () {
        countDown.init();

        function updateCountdowns() {
          countDown.validElements.forEach((element, i) => {
            countDown.changeTime(element, countDown.endDate[i]);
          });
        }
        updateCountdowns();
        setInterval(updateCountdowns, 2000);
      });
    },

    magnificPopupActivation: function () {
      $(".gallery-main-wrapper").magnificPopup({
        delegate: ".gallery-single",
        type: "image",
        mainClass: "mfp-with-zoom",
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true, 
          duration: 300,
          easing: "ease-in-out",
          opener: function (openerElement) {
            return openerElement.is("img")
              ? openerElement
              : openerElement.find("img");
          },
        },
      });
    },

    categoryMenuHover: function () {
      $(".vertical-nav-menu li.vertical-nav-item").mouseover(function () {
        $(".tmp-vertical-inner").hide();
        $(".vertical-nav-menu li.vertical-nav-item").removeClass("active");
        $(this).addClass("active");
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).stop().fadeIn();
        return false;
      });



    },


    filterActionButton: function () {
      $(".discover-filter-activation").on("click", function () {
        $(this).toggleClass("open");
        $(".default-exp-expand").slideToggle("400");
      });
      $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [100, 300],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
      });
      $("#amount").val(
        "$" +
          $("#slider-range").slider("values", 0) +
          " - $" +
          $("#slider-range").slider("values", 1)
      );
    },

    showMoreBtn: function () {
      $.fn.hasShowMore = function () {
        return this.each(function () {
          $(this).toggleClass("active");
          $(this).text("Show Less");
          $(this).parent(".has-show-more").toggleClass("active");
          if ($(this).parent(".has-show-more").hasClass("active")) {
            $(this).text("Show Less");
          } else {
            $(this).text("Show More");
          }
        });
      };
      $(document).on("click", ".tmp-show-more-btn", function () {
        $(this).hasShowMore();
      });
    },


    menuCurrentLink: function () {
        var currentPage = location.pathname.split("/"),
        current = currentPage[currentPage.length-1];
        $('.mainmenu li.has-menu-child-item a, .dashboard-mainmenu li a').each(function(){
            var $this = $(this);
            if($this.attr('href') === current){
                $this.addClass('active');
                $this.parents('.has-menu-child-item').addClass('menu-item-open')
            }
        });
    },

    addtoWishlist: function(){
     // Success color
  const successColor = '#28a745';
  const defaultColor = '#555';

  // Reusable toggle function
  function toggleAction(element, defaultIcon, activeIcon, defaultTooltip, activeTooltip) {
    const icon = element.querySelector('i');
    const isActive = icon.dataset.active === 'true';

    if (!isActive) {
      icon.className = `fa-solid ${activeIcon}`;
      icon.style.color = successColor;
      icon.dataset.active = 'true';
      element.setAttribute('data-tooltip', activeTooltip);
    } else {
      icon.className = defaultIcon;
      icon.style.color = defaultColor;
      icon.dataset.active = 'false';
      element.setAttribute('data-tooltip', defaultTooltip);
    }
  }

  // Wishlist Buttons (all)
  const wishlistBtns = document.querySelectorAll('.add-to-wishlist-action');
  wishlistBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      toggleAction(
        this,
        'fa-regular fa-heart',
        'fa-check',
        'Add to wishlist',
        'Added successfully'
      );
    });
  });

  // Compare Buttons (all)
  const compareBtns = document.querySelectorAll('.add-to-compare-action');
  compareBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      toggleAction(
        this,
        'fa-light fa-code-compare',
        'fa-check',
        'Add to Compare',
        'Added to compare'
      );
    });
  });
    },


    dateUpdate: function () {

      let fullYear = document.querySelectorAll("#year");

      if (fullYear.length) {
        window.addEventListener("DOMContentLoaded", function () {
          document.getElementById("year").textContent = new Date().getFullYear();
        });
      }

    },

    uploadImage: function () {

      let uploadImage = document.getElementsByClassName('invers-uploadBtnActive');

      if (uploadImage.length) {
        const uploadBtn = document.getElementById('uploadBtn');
        const fileInput = document.getElementById('fileInput');
        const previewImage = document.getElementById('previewImage');
        const authorImg = document.getElementById('authorImg'); // profile image

        uploadBtn.addEventListener('click', () => {
          fileInput.click(); // open file picker
        });

        fileInput.addEventListener('change', () => {
          const file = fileInput.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // replace both images
              previewImage.src = e.target.result;
              authorImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
          }
        });
      }


    },

    customSelect: function(){
      let index = 1;
        const on = (listener, query, fn) => {
          document.querySelectorAll(query).forEach(item => {
            item.addEventListener(listener, el => {
              fn(el);
            })
          })
        }

        on('click', '.selectBtn', item => {
          const next = item.target.nextElementSibling;
          next.classList.toggle('toggle');
          next.style.zIndex = index++;
        });
        on('click', '.option', item => {
          item.target.parentElement.classList.remove('toggle');

          const parent = item.target.closest('.select').children[0];
          parent.setAttribute('data-type', item.target.getAttribute('data-type'));
          parent.innerText = item.target.innerText;
        })
    },

    contactForm: function () {
      $('.tmp-dynamic-form').on('submit', function (e) {
        e.preventDefault();
        var _self = $(this);
        var __selector = _self.closest('input,textarea');
        _self.closest('div').find('input,textarea').removeAttr('style');
        _self.find('.error-msg').remove();
        _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
        var data = $(this).serialize();
        $.ajax({
          url: 'mail.php',
          type: "post",
          dataType: 'json',
          data: data,
          success: function (data) {
            _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
            if (data.code == false) {
              _self.closest('div').find('[name="' + data.field + '"]');
              _self.find('.tmp-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
            } else {
              $('.error-msg').hide();
              $('.form-group').removeClass('focused');
              _self.find('.tmp-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
              _self.closest('div').find('input,textarea').val('');

              setTimeout(function () {
                $('.success-msg').fadeOut('slow');
              }, 5000);
            }
          }
        });
      });
    },

    checkoutPage: function () {
      $(document).ready(function() {
        $(".single-payment-option").find("p.desc").hide();
        $(".single-payment-option:first").find("p.desc").show();

        // label 
        $(".single-payment-option .option").on("click", function() {
          $(".single-payment-option").find("p.desc").slideUp();

          $(this).closest(".single-payment-option").find("p.desc").slideDown();

          // checkbox handle 
          $(".single-payment-option input[type='checkbox']").prop("checked", false);
          $(this).find("input[type='checkbox']").prop("checked", true);
        });
      });

    },
    dataCss: function(){
      $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
      });
    },


    

  }




  invJs.m();
})(jQuery, window)