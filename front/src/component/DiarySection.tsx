import Emotions from "./common/Emotions";
import DiaryItem from "./DiaryItem";

import * as Style from "@/style/component/DiarySection-style";

const DiarySection = () => {
    return (
        <Style.Container>
            <Style.Title>
                <h2>마음 일기</h2>
                <p>사람들이 어떠한 마음을 가지고 있는지 카테고리 별로 알아보아요.</p>
            </Style.Title>
            <Emotions />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
        </Style.Container>
    );
};

export default DiarySection;