import { useRef } from "react";
import React from "react";
import art from "../../resource/images/art.png";
import economy from "../../resource/images/economy.png";
import book from "../../resource/images/书.png";
import personal from "../../resource/images/人物.png";
import historyIcon from "../../resource/images/历史.png";
import heart from "../../resource/images/heart.png";
import thinking from "../../resource/images/思维.png";
import computer from "../../resource/images/电脑.png";
import { useHistory } from "react-router-dom";
import logo from "../../resource/images/logo.jpeg";
import NavBar from "../../components/navBar/navbar";
import { SearchOutlined } from "@material-ui/icons";
import { useInfiniteQuery } from "react-query";
import { ask, useReachBottom } from "../../util";
import BookItem from "../../components/bookItem/bookItem";
import { CircularProgress } from "@material-ui/core";
import BottomBar from "../../components/bottomBar/bottomBar";
export interface BookBaseProperty {
    author: string;
    bookId: number;
    comments: number;
    goodComments: number;
    imgUrl: string;
    price: number;
    title: string;
}
const IndexPage: React.FC = () => {
    const navItems = useRef([
        {
            title: "小说",
            pic: book,
        },
        {
            title: "传记",
            pic: personal,
        },
        {
            title: "艺术",
            pic: art,
        },
        {
            title: "励志",
            pic: heart,
        },
        {
            title: "哲学",
            pic: thinking,
        },
        {
            title: "计算机",
            pic: computer,
        },
        {
            title: "经济",
            pic: economy,
        },
        {
            title: "历史",
            pic: historyIcon,
        },
    ]);
    const { push } = useHistory();
    const { isFetching, data, fetchMore } = useInfiniteQuery(
        `/api/recommends`,
        (url: string, page = 1) => {
            return ask({
                url: url,
                params: {
                    page: page,
                },
            }).then((v) => v.data);
        },
        {
            getFetchMore: (lastPage, allPages) => allPages.length + 1,
            staleTime: 1000 * 60 * 3,
        }
    );
    const container = useRef<HTMLDivElement | null>(null);
    useReachBottom(container.current, fetchMore);
    return (
        <div className="h-screen overflow-y-auto" ref={container}>
            <div className="mb-16">
                <NavBar
                    centerPart={
                        <div className="gray-input mr-1 ml-1">
                            <SearchOutlined className="" />
                            <input
                                className="border-none bg-transparent py-1 flex-grow"
                                placeholder="搜索钟意的书籍吧!"
                                onFocus={() => push("/searchInput")}
                            />
                        </div>
                    }
                    leftPart={<img src={logo} className="h-6 w-6 mr-1" />}
                />
                {/*<section data-name={'轮播图'} className="w-full overflow-hidden">*/}
                {/*    <Slider>*/}
                {/*        {[swiper1, swiper2, swiper3].map((value, index) => {*/}
                {/*            return <img style={{height: 170}} src={value} key={index} alt="carousel" className="ripple w-screen" />;*/}
                {/*        })}*/}
                {/*    </Slider>*/}
                {/*</section>*/}
                <nav data-name={"分类"} className="mt-4">
                    <div
                        className="grid"
                        style={{
                            gridTemplateColumns: "repeat(4,25%)",
                            gridTemplateRows: "auto auto",
                            justifyItems: "center",
                        }}
                    >
                        {navItems.current.map((value, index) => {
                            return (
                                <div
                                    className="grid gap-1 items-center justify-items-center ripple"
                                    style={{ gridTemplateRows: "auto 20px" }}
                                    key={value.title}
                                    onClick={() => push(`/searchResultList?keyword=${value.title}`)}
                                >
                                    <img src={value.pic} alt="icon" className="h-12 w-12 shadow-md mb-1" />
                                    <span className="text-sm mb-2">{value.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </nav>
                <main data-name={"列表"} className="mt-4 p-2">
                    <div className="font-bold text-base">为您推荐</div>
                    <div data-testid={"recommend"} className="mt-4 ">
                        {data &&
                            data.map((list: BookBaseProperty[]) => {
                                return list.map((value, index) => {
                                    return <BookItem key={value.bookId} {...value} onClick={() => push("/bookDetail?bookId=" + value.bookId)} />;
                                });
                            })}
                    </div>
                </main>
                {isFetching && data?.length !== 1 && (
                    <div className="text-center">
                        <CircularProgress placeholder="loading..." />
                    </div>
                )}
                {isFetching && data?.length === 1 && (
                    <div className="text-center">
                        <CircularProgress placeholder="loading..." />
                        <div className="text-teal-500">正在拉取推荐中，请耐心等待(约20秒)</div>
                    </div>
                )}
            </div>
            <BottomBar currentValue="/" />
        </div>
    );
};
export default IndexPage;
