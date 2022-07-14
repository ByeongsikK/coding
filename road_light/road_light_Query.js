$(document).ready(function () {



    $.kakaomap = function () {
        kakao.maps.disableHD();

        var MARKER_WIDTH = 33, // 기본, 클릭 마커의 너비
            MARKER_HEIGHT = 36, // 기본, 클릭 마커의 높이
            OFFSET_X = 12, // 기본, 클릭 마커의 기준 X좌표
            OFFSET_Y = MARKER_HEIGHT, // 기본, 클릭 마커의 기준 Y좌표
            OVER_MARKER_WIDTH = 40, // 오버 마커의 너비
            OVER_MARKER_HEIGHT = 42, // 오버 마커의 높이
            OVER_OFFSET_X = 13, // 오버 마커의 기준 X좌표
            OVER_OFFSET_Y = OVER_MARKER_HEIGHT, // 오버 마커의 기준 Y좌표
            SPRITE_MARKER_URL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png', // 스프라이트 마커 이미지 URL
            SPRITE_WIDTH = 126, // 스프라이트 이미지 너비
            SPRITE_HEIGHT = 146, // 스프라이트 이미지 높이
            SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격

        var markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT), // 기본, 클릭 마커의 크기
            markerOffset = new kakao.maps.Point(OFFSET_X, OFFSET_Y), // 기본, 클릭 마커의 기준좌표
            overMarkerSize = new kakao.maps.Size(OVER_MARKER_WIDTH, OVER_MARKER_HEIGHT), // 오버 마커의 크기
            overMarkerOffset = new kakao.maps.Point(OVER_OFFSET_X, OVER_OFFSET_Y), // 오버 마커의 기준 좌표
            spriteImageSize = new kakao.maps.Size(SPRITE_WIDTH, SPRITE_HEIGHT); // 스프라이트 이미지의 크기

        var mapContainer = document.getElementById('map'),
            // 지도를 표시할 div 

            mapOption = {
                center: new kakao.maps.LatLng(36.46994680, 127.2691494), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨    
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


        var positions = [{
            title: '가로등1',
            latlng: new kakao.maps.LatLng(36.46994680, 127.2691494),
            adress: '세종특별자치시 대평동 574-2',
            photo1: 'url(./가로등사진/가로등38표찰.png) 50% 50% / cover no-repeat',
            photo2: 'url(./가로등사진/가로등38.png) 50% 50% / cover no-repeat',
            tdname: '가로등',
            pyochal: '38',
        },
        {
            title: '가로등2',
            latlng: new kakao.maps.LatLng(36.46948720, 127.2689554),
            adress: '세종특별자치시 대평동 574-2',
            photo1: 'url(./가로등사진/가로등35표찰.png) 50% 50% / cover no-repeat',
            photo2: 'url(./가로등사진/가로등35.png) 50% 50% / cover no-repeat',
            tdname: '가로등',
            pyochal: '35',
        },
        {
            title: '가로등3',
            latlng: new kakao.maps.LatLng(36.46773580, 127.2678234),
            adress: '세종특별자치시 대평동 574-2',
            photo1: 'url(./가로등사진/가로등11-6표찰.png) 50% 50% / cover no-repeat',
            photo2: 'url(./가로등사진/가로등11-6.png) 50% 50% / cover no-repeat',
            tdname: '가로등',
            pyochal: '11-6',
        },
            // {
            //     title: '가로등4',
            //     latlng: new kakao.maps.LatLng(36.47088880, 127.2698948),
            //     adress: '세종특별자치시 대평동 574-2',
            //     photo1: 'url(./가로등사진/가로등52표찰.png) 50% 50% / cover no-repeat',
            //     photo2: 'url(./가로등사진/가로등52.png) 50% 50% / cover no-repeat',
            //     tdname: '가로등',
            // }
        ];

        // var positions = [ // 마커의 위치
        //         new kakao.maps.LatLng(33.44975, 126.56967),
        //         new kakao.maps.LatLng(33.450579, 126.56956),
        //         new kakao.maps.LatLng(33.4506468, 126.5707)
        //     ],
        selectedMarker = null; // 클릭한 마커를 담을 변수

        // 지도 위에 마커를 표시합니다
        for (var i = 0, len = positions.length; i < len; i++) {
            var gapX = (MARKER_WIDTH + SPRITE_GAP), // 스프라이트 이미지에서 마커로 사용할 이미지 X좌표 간격 값
                originY = (MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 기본, 클릭 마커로 사용할 Y좌표 값
                overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 오버 마커로 사용할 Y좌표 값
                normalOrigin = new kakao.maps.Point(0, originY), // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
                clickOrigin = new kakao.maps.Point(gapX, originY), // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
                overOrigin = new kakao.maps.Point(gapX * 2, overOriginY); // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표

            // 마커를 생성하고 지도위에 표시합니다
            addMarker(positions[i], normalOrigin, overOrigin, clickOrigin);
        }

        // 마커를 생성하고 지도 위에 표시하고, 마커에 mouseover, mouseout, click 이벤트를 등록하는 함수입니다
        function addMarker(position, normalOrigin, overOrigin, clickOrigin) {

            // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
            var normalImage = createMarkerImage(markerSize, markerOffset, normalOrigin),
                overImage = createMarkerImage(overMarkerSize, overMarkerOffset, overOrigin),
                clickImage = createMarkerImage(markerSize, markerOffset, clickOrigin);

            // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: positions[i].latlng,
                image: normalImage,
            });
            marker.id = i

            // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
            marker.normalImage = normalImage;

            // 마커에 mouseover 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover', function () {

                // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
                // 마커의 이미지를 오버 이미지로 변경합니다
                if (!selectedMarker || selectedMarker !== marker) {
                    marker.setImage(overImage);
                }
            });

            // 마커에 mouseout 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', function () {

                // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
                // 마커의 이미지를 기본 이미지로 변경합니다
                if (!selectedMarker || selectedMarker !== marker) {
                    marker.setImage(normalImage);
                }
            });

            // 마커에 click 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {

                $('.right').addClass('on');

                for (i = 0; i < positions.length; i++) {
                    if (marker.id == i) {
                        console.log($('.photo_box > .photo1'))
                        $('.photo_box > .photo1').css({ "background": positions[i].photo1 });
                        $('.photo_box > .photo2').css({ "background": positions[i].photo2 });
                        $('.garo td')[0].innerText = positions[i].tdname;
                        $('.garo td')[1].innerText = positions[i].pyochal;
                        $('.garo td')[2].innerText = positions[i].adress;
                    }
                }

                // if (marker.id = i)
                // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
                // 마커의 이미지를 클릭 이미지로 변경합니다
                if (!selectedMarker || selectedMarker !== marker) {

                    // 클릭된 마커 객체가 null이 아니면
                    // 클릭된 마커의 이미지를 기본 이미지로 변경하고
                    !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

                    // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
                    marker.setImage(clickImage);
                }

                // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
                selectedMarker = marker;
            });
        }

        // MakrerImage 객체를 생성하여 반환하는 함수입니다
        function createMarkerImage(markerSize, offset, spriteOrigin) {
            var markerImage = new kakao.maps.MarkerImage(
                SPRITE_MARKER_URL, // 스프라이트 마커 이미지 URL
                markerSize, // 마커의 크기
                {
                    offset: offset, // 마커 이미지에서의 기준 좌표
                    spriteOrigin: spriteOrigin, // 스트라이프 이미지 중 사용할 영역의 좌상단 좌표
                    spriteSize: spriteImageSize // 스프라이트 이미지의 크기
                }
            );

            return markerImage;
        }
    }

    window.addEventListener('resize', function () {
        $.kakaomap();
    })

    $('input[type=reset]').click(function () {
        $('.right').removeClass('on');
    })


    let login = false;

    let pgnum = 0

    $(`.my_list`).hide();


    $(`.menu a:first`).click(function () {
        $(`body section`).hide();
        if (login === false) {
            $(`.sec1`).show();
        } else {
            $('.sec2').show();
            $.kakaomap();
        }
        pgnum = 1
    });


    $(`.left_bt`).click(function () {
        $(`body section`).hide();
        if (login === false) {
            $(`.sec1`).show();
        } else {
            $('.sec2').show();
            $.kakaomap();
        }
        pgnum = 1
    });

    $(`.menu a:last`).click(function () {
        $(`body section`).hide();
        $(`.sec3`).show();
        pgnum = 2
    });

    $(`.right_bt`).click(function () {
        $(`body section`).hide();
        $(`.sec3`).show();
        pgnum = 2
    });


    $(`.my_minwon`).click(function () {
        $('body > section').hide();
        if (login === false) {
            $(`.sec1`).show();
        }
    });

    // --로그인 버튼
    $(`.ganpyeon_bt`).click(function () {
        $(`.my_minwon`).hide();
        $(`.logout`).show();
        login = true;
        if (pgnum === 1) {
            $('body > section').hide();
            $(`.sec2`).show();
            console.log(pgnum)
            $.kakaomap();
        } else if (pgnum === 2) {
            console.log(pgnum)
            $('body > section').hide();
            $('.sec3').show();
        }
        $(`.my_list`).show();
        console.log(login)
    });

    $(`.logout a`).click(function () {
        login = false
        $(`.my_list`).hide();
        $('body > section').hide();
        $('.main').show();
        $('.logout').hide();
        $('.my_minwon').show();
    });




    // -----처리현황 페이징 버튼-----

    $('.pgnum:first-child').addClass('on');

    $('.pgnum').click(function () {
        $('.pgnum').addClass('on')
            .siblings().removeClass('on').end();
    });

    $(`.pgnum`).click(function () {
        $(this).addClass(`on`);
    });

    // -----처리현황 페이징 버튼-----

});
