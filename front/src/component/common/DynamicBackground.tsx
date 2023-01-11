import { useState, useEffect } from "react";

import theme from "@/style/Theme";
import * as Style from "@/style/common/DynamicBackground-style";

import usePeriodOfDay from "@/hooks/useReriodOfDay";

const ColorByPeriod = {
    dawn: theme.TimeGradient.dawn,
    morning: theme.TimeGradient.morning,
    afternoon: theme.TimeGradient.afternoon,
    evening: theme.TimeGradient.evening,
} as const;

const getOffset = () => {
    const offset = Math.floor(((Math.random() * window.innerWidth) / window.innerWidth) * 100);

    return Math.min(
        offset,
        ((Math.random() * (window.innerWidth - 141)) / window.innerWidth) * 100
    );
};

const DynamicBackground = () => {
    const [OffestList, setOffsetList] = useState(() => {
        return Array(Math.trunc(window.innerHeight / 120)) // 160
            .fill(undefined)
            .map(getOffset);
    });

    const period = usePeriodOfDay();

    useEffect(() => {
        const mover = requestAnimationFrame(() => {
            setOffsetList((prev) => {
                return prev.map((offset) => {
                    const newOffset = offset + Math.random() * 0.01; // 0.01

                    if (newOffset >= 100) {
                        // return Math.random() * -1;

                        return -((141 / window.innerWidth) * 100);
                    }

                    return newOffset;
                });
            });
        });

        return () => cancelAnimationFrame(mover);
    });

    return (
        <>
            {period !== null && (
                <Style.Background backgroundColor={ColorByPeriod[period]}>
                    {OffestList.map((offset, idx) => {
                        return (
                            <Style.Lane key={idx}>
                                {period === "morning" || period === "afternoon" ? (
                                    <Style.Cloud style={{ left: `${offset}%` }} />
                                ) : (
                                    <Style.Star style={{ left: `${offset}%` }}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Style.Star>
                                )}
                            </Style.Lane>
                        );
                    })}
                </Style.Background>
            )}
        </>
    );
};

export default DynamicBackground;
