$(document).ready(function () {

    $.kakaomap = function() {

        var mapContainer = document.getElementById('map'),
        // 지도를 표시할 div 

        mapOption = {
            center: new kakao.maps.LatLng(36.46994680, 127.2691494), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨    
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


    var positions = [{
            title: '가로등1',
            latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
        },
        {
            title: '가로등2',
            latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
        },
        {
            title: '가로등3',
            latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
        },
        {
            title: '가로등4',
            latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
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

    };
    // -----카카오 맵-----

    // ----- 지도 마커 클릭 이벤트-----
    $(`img[title=가로등1`).click(function () {
        $(`.photo_box.n2`).hide();
        $(`.photo_box.n3`).hide();
        $(`.photo_box.n4`).hide();
        $(`.photo_box.n1`).show();
        $(`.photo_box.n1`).css('display', 'flex');
        $(`.garo0`).hide();
        $(`.garo2`).hide();
        $(`.garo3`).hide();
        $(`.garo4`).hide();
        $(`.garo1`).show();
    });

    $(`img[title=가로등2`).click(function () {
        $(`.photo_box.n1`).hide();
        $(`.photo_box.n3`).hide();
        $(`.photo_box.n4`).hide();
        $(`.photo_box.n2`).show();
        $(`.photo_box.n2`).css('display', 'flex');
        $(`.garo0`).hide();
        $(`.garo1`).hide();
        $(`.garo3`).hide();
        $(`.garo4`).hide();
        $(`.garo2`).show();
    });

    $(`img[title=가로등3`).click(function () {
        $(`.photo_box.n1`).hide();
        $(`.photo_box.n2`).hide();
        $(`.photo_box.n4`).hide();
        $(`.photo_box.n3`).show();
        $(`.photo_box.n3`).css('display', 'flex');
        $(`.garo0`).hide();
        $(`.garo1`).hide();
        $(`.garo2`).hide();
        $(`.garo4`).hide();
        $(`.garo3`).show();
    });

    $(`img[title=가로등4`).click(function () {
        $(`.photo_box.n1`).hide();
        $(`.photo_box.n2`).hide();
        $(`.photo_box.n3`).hide();
        $(`.photo_box.n4`).show();
        $(`.photo_box.n4`).css('display', 'flex');
        $(`.garo0`).hide();
        $(`.garo1`).hide();
        $(`.garo2`).hide();
        $(`.garo3`).hide();
        $(`.garo4`).show();
    });
    // ----- 지도 마커 클릭이벤트----- 

    setTimeout(function(){ map.relayout(); }, 0);

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
