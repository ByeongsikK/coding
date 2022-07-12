$(document).ready(function () {

// --11111....메뉴에서 고장신고 클릭했을때
$(`.menu a:first`).click(function() {
    // --로그인하기 전에 처리현황 넘어갈때
    $(`.menu a:last`).click(function() {
        $(`.sec1`).hide();
        $(`.sec3`).show();
        $(`.my_list`).hide();
        $(`.my_minwon`).click(function() {
            $(`sec3`).hide();
            $(`sec1`).show();
            // --나의 민원 간편인증 처리현황용
            $(`.ganpyeon_bt`).addClass(`cheoli`);
            $(`.ganpyeon_bt.cheoli`).click(function() {
                $(`.sec1`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
            });
            // --나의 민원 간편인증 처리현황용
        });
    });
    // --로그인하기 전에 처리현황 넘어갈때
    $(`.main`).hide();
    $(`.sec1`).show();
    $(`.ganpyeon_bt`).click(function() {
        $(`.sec1`).hide();
        $(`.sec2`).show();
        // --카카오맵 추가

        // --카카오맵 추가
        $(`.my_minwon`).hide();
        $(`.logout`).show();
        // --로그인한 채로 처리현황 넘어가기
        $(`.menu a:last`).click(function() {
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).show();
            // --로그인한 채로 다시 고장신고 돌아오기
            $(`.menu a:first`).click(function() {
                $(`.sec3`).hide();
                $(`.sec1`).hide();
                $(`.sec2`).show();
                // --카카오맵 추가

                // --카카오맵 추가
            });
            // --로그인한 채로 다시 고장신고 돌아오기

        });
        // --로그인 한 채로 처리현황 넘어가기

    });
});
// --메뉴에서 고장신고 클릭했을때





// --22222....메인 고장신고 버튼 클릭했을때
$(`.left_bt`).click(function() {
    // --로그인하기 전에 처리현황 넘어갈때
    $(`.menu a:last`).click(function() {
        $(`.sec1`).hide();
        $(`.sec3`).show();
        $(`.my_list`).hide();
        $(`.my_minwon`).click(function() {
            $(`sec3`).hide();
            $(`sec1`).show();
            // --나의 민원 간편인증 처리현황용
            $(`.ganpyeon_bt`).addClass(`cheoli`);
            $(`.ganpyeon_bt.cheoli`).click(function() {
                $(`.sec1`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
            });
            // --나의 민원 간편인증 처리현황용
        });
    });
    // --로그인하기 전에 처리현황 넘어갈때
    $(`.main`).hide();
    $(`.sec1`).show();
    $(`.ganpyeon_bt`).click(function() {
        $(`.sec1`).hide();
        $(`.sec2`).show();
        // --카카오맵 추가

        // --카카오맵 추가
        $(`.my_minwon`).hide();
        $(`.logout`).show();
        // --로그인한 채로 처리현황 넘어가기
        $(`.menu a:last`).click(function() {
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).show();
            // --로그인한 채로 다시 고장신고 돌아오기
            $(`.menu a:first`).click(function() {
                $(`.sec3`).hide();
                $(`.sec1`).hide();
                $(`.sec2`).show();
                // --카카오맵 추가

                // --카카오맵 추가
            });
            // --로그인한 채로 다시 고장신고 돌아오기

        });
        // --로그인 한 채로 처리현황 넘어가기

    });
});
// --22222....메인 고장신고 버튼 클릭했을때





// --33333....메뉴에서 처리현황 클릭했을때
$(`.menu a:last`).click(function() {
    // --로그인하기 전에 고장신고 넘어갈때
    $(`.menu a:first`).click(function() {
        // $(`.sec2`).hide();
        $(`.sec3`).hide();
        $(`.sec1`).show();
        $(`.ganpyeon_bt`).click(function() {
            $(`.sec1`).hide();
            $(`.sec2`).show();
            // --카카오맵 추가


            // --카카오맵 추가
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            // --다시 처리현황 돌아올때
            $(`.menu a:last`).click(function() {
                $(`.sec2`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
            });
            // --다시 처리현황 돌아올때
        });
        // --고장신고에서 로그인한 채로 처리현황 넘어갈때
        $(`.menu a:last`).click(function() {
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).hide();
        });
        // --고장신고에서 로그인한 채로 처리현황 넘어갈때
    });
    // --로그인하기 전에 고장신고 넘어갈때
    $(`.main`).hide();
    $(`.sec3`).show();
    $(`.my_list`).hide();
    $(`.my_minwon`).click(function() {
        $(`.sec3`).hide();
        $(`.sec1`).show();
        $(`.ganpyeon_bt`).click(function() {
            $(`.sec1`).hide();
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).show();
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            // --처리현황에서 로그인한 채로 고장신고 넘어갈때
            $(`.menu .a:first`).click(function() {
                $(`.sec3`).hide();
                $(`.sec1`).hide();
                $(`.sec2`).show();
            });
            // --처리현황에서 로그인한 채로 고장신고 넘어갈때
        });
    });
});
// --33333....메뉴에서 처리현황 클릭했을때






// --44444....메인 처리현황 버튼 클릭했을때
$(`.right_bt`).click(function() {
    // --로그인하기 전에 고장신고 넘어갈때
    $(`.menu a:first`).click(function() {
        // $(`.sec2`).hide();
        $(`.sec3`).hide();
        $(`.sec1`).show();
        $(`.ganpyeon_bt`).click(function() {
            $(`.sec1`).hide();
            $(`.sec2`).show();
            // --카카오맵 추가


            // --카카오맵 추가
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            // --다시 처리현황 돌아올때
            $(`.menu a:last`).click(function() {
                $(`.sec2`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
            });
            // --다시 처리현황 돌아올때
        });
        // --고장신고에서 로그인한 채로 처리현황 넘어갈때
        $(`.menu a:last`).click(function() {
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).hide();
        });
        // --고장신고에서 로그인한 채로 처리현황 넘어갈때
    });
    // --로그인하기 전에 고장신고 넘어갈때
    $(`.main`).hide();
    $(`.sec3`).show();
    $(`.my_list`).hide();
    $(`.my_minwon`).click(function() {
        $(`.sec3`).hide();
        $(`.sec1`).show();
        $(`.ganpyeon_bt`).click(function() {
            $(`.sec1`).hide();
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).show();
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            // --처리현황에서 로그인한 채로 고장신고 넘어갈때
            $(`.menu .a:first`).click(function() {
                $(`.sec3`).hide();
                $(`.sec1`).hide();
                $(`.sec2`).show();
            });
            // --처리현황에서 로그인한 채로 고장신고 넘어갈때
        });
    });
});
// --44444....메인 처리현황 버튼 클릭했을때









// -------------------공통-------------------

// --나의 민원현황
$(`.my_minwon`).click(function() {
    $(`.sec1`).show();
            $(`.ganpyeon_bt`).click(function() {
                $(`.sec1`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
                // --고장신고 넘어갈때
                $(`.menu a:first`).click(function() {
                    $(`.sec1`).hide();
                    $(`.sec3`).hide();
                    $(`.sec2`).show();
                    // --처리현황넘어갈때
                    $(`.menu a:last`).click(function() {
                        $(`.sec2`).hide();
                        $(`.sec3`).show();
                    });
                    // --처리현황넘어갈때
                });
                // --고장신고 넘어갈때
                // --처리현황 넘어갈때
                $(`.menu a:last`).click(function() {
                    $(`.sec2`).hide();
                    $(`.sec3`).show();
                    $(`.my_list`).show();
                });
                // --처리현황 넘어갈때
            });
    $(`.sec2`).hide();
    $(`.sec3`).hide();
    $(`.main`).hide();
});
// --나의 민원현황



// --로그아웃
$(`.logout`).click(function() {
    $(`.sec1`).hide();
    $(`.sec2`).hide();
    $(`.sec3`).hide();
    $(`.my_list`).hide();
    $(`.main`).show();
    $(`.logout`).hide();
    $(`.my_minwon`).show();
});
// --로그아웃


});