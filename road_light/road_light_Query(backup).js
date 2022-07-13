$(document).ready(function () {

    $.kakaomap = function () {
        kakao.maps.disableHD();

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
                photo1: 'url(./가로등사진/가로등38표찰.png)',
                photo2: 'url(./가로등사진/가로등38.png)',
            },
            {
                title: '가로등2',
                latlng: new kakao.maps.LatLng(36.46948720, 127.2689554),
                adress: '세종특별자치시 대평동 574-2',
                photo1: 'url(./가로등사진/가로등35표찰.png)',
                photo2: 'url(./가로등사진/가로등35.png)',
            },
            {
                title: '가로등3',
                latlng: new kakao.maps.LatLng(36.46773580, 127.2678234),
                adress: '세종특별자치시 대평동 574-2',
                photo1: 'url(./가로등사진/가로등11-6표찰.png)',
                photo2: 'url(./가로등사진/가로등11-6.png)',
            },
            {
                title: '가로등4',
                latlng: new kakao.maps.LatLng(36.47088880, 127.2698948),
                adress: '세종특별자치시 대평동 574-2',
                photo1: 'url(./가로등사진/가로등52표찰.png)',
                photo2: 'url(./가로등사진/가로등52.png)',
            }
        ];

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            });

            // kakao.maps.event.addListener(marker, 'click', function() {
            //     console.log(marker);
            //     // $('.photo_box > photo1').css({"background":e.photo1});
            //     // $('.photo_box > photo2').css({"background":e.photo2});
            //     // 마커 위에 인포윈도우를 표시합니다
            //     infowindow.open(map, marker);  
            // });

            function addMarker(position, normalOrigin, overOrigin, clickOrigin) {

                // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
                var normalImage = createMarkerImage(markerSize, markerOffset, normalOrigin),
                    overImage = createMarkerImage(overMarkerSize, overMarkerOffset, overOrigin),
                    clickImage = createMarkerImage(markerSize, markerOffset, clickOrigin);
                
                // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: position,
                    image: normalImage
                });
            
                // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
                marker.normalImage = normalImage;
            
                // 마커에 click 이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function() {
            
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
            
                    console.log(selectedMarker.title)
                });
            }
        };
        // -----카카오 맵-----

        

        // ----- 지도 마커 클릭 이벤트-----
        // $(`img[title=가로등1`).click(function () {
        //     $(`.photo_box.n2`).hide();
        //     $(`.photo_box.n3`).hide();
        //     $(`.photo_box.n4`).hide();
        //     $(`.photo_box.n1`).show();
        //     $(`.photo_box.n1`).css('display', 'flex');
        //     $(`.garo0`).hide();
        //     $(`.garo2`).hide();
        //     $(`.garo3`).hide();
        //     $(`.garo4`).hide();
        //     $(`.garo1`).show();
        //     $(`.sec2 .right`).addClass('on');
        // });

        // $(`img[title=가로등2`).click(function () {
        //     $(`.photo_box.n1`).hide();
        //     $(`.photo_box.n3`).hide();
        //     $(`.photo_box.n4`).hide();
        //     $(`.photo_box.n2`).show();
        //     $(`.photo_box.n2`).css('display', 'flex');
        //     $(`.garo0`).hide();
        //     $(`.garo1`).hide();
        //     $(`.garo3`).hide();
        //     $(`.garo4`).hide();
        //     $(`.garo2`).show();
        // });

        // $(`img[title=가로등3`).click(function () {
        //     $(`.photo_box.n1`).hide();
        //     $(`.photo_box.n2`).hide();
        //     $(`.photo_box.n4`).hide();
        //     $(`.photo_box.n3`).show();
        //     $(`.photo_box.n3`).css('display', 'flex');
        //     $(`.garo0`).hide();
        //     $(`.garo1`).hide();
        //     $(`.garo2`).hide();
        //     $(`.garo4`).hide();
        //     $(`.garo3`).show();
        // });

        // $(`img[title=가로등4`).click(function () {
        //     $(`.photo_box.n1`).hide();
        //     $(`.photo_box.n2`).hide();
        //     $(`.photo_box.n3`).hide();
        //     $(`.photo_box.n4`).show();
        //     $(`.photo_box.n4`).css('display', 'flex');
        //     $(`.garo0`).hide();
        //     $(`.garo1`).hide();
        //     $(`.garo2`).hide();
        //     $(`.garo3`).hide();
        //     $(`.garo4`).show();
        // });



        // let pins = [
        //     pins += $(`img[title=가로등1]`),
        //     pins += $(`img[title=가로등2]`),
        //     pins += $(`img[title=가로등3]`),
        //     pins += $(`img[title=가로등4]`),
        // ];
        // console.log(pins)


        // ----- 지도 마커 클릭이벤트----- 


        setTimeout(function () {
            map.relayout();
        }, 0);

        console.log(positions)

        

    }
    

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
