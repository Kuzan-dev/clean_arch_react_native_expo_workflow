import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isSameDay,
  getDay,
  addDays,
  subMonths,
  addMonths,
} from "date-fns";
import { COLORS } from "@/constants/Colors";
import { Iconify } from "react-native-iconify";

type CalendarHeatmapProps = {
  data:
    | {
        value: number;
        day: any;
      }[]
    | undefined;
};

const CalendarHeatmap = ({ data }: CalendarHeatmapProps) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const daysOfMonth = eachDayOfInterval({
    start: getDay(start) === 0 ? start : addDays(start, -getDay(start)),
    end,
  });

  const weekdays = ["D", "L", "M", "M", "J", "V", "S"];

  return (
    <>
      <View style={styles.buttonsRow}>
        <Pressable onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <Iconify icon="eva:arrow-left-fill" size={30} color={COLORS.blue2} />
        </Pressable>
        <Text style={styles.monthText}>
          {format(currentMonth, "MMMM yyyy")}
        </Text>
        <Pressable onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <Iconify icon="eva:arrow-right-fill" size={30} color={COLORS.blue2} />
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={styles.weekdaysRow}>
          {weekdays.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
        </View>
        {daysOfMonth.map((day, index) => {
          const dayData = data?.find((d) => isSameDay(d.day, day));
          const value = dayData ? dayData.value : 0;
          const backgroundColor =
            value > 6
              ? COLORS.blue
              : value > 4
              ? COLORS.bluelg
              : value > 2
              ? COLORS.bluelg4
              : value > 0
              ? COLORS.bluelg3
              : "#f1f4fc";

          return (
            <View key={index} style={[styles.day, { backgroundColor }]}>
              {day.getMonth() === start.getMonth() && (
              <Text style={styles.dayText}>{format(day, 'd')}</Text>
            )}
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  weekdaysRow: {
    flexDirection: "row",
  },
  day: {
    width: "12.2%",
    height: "12.2%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderRadius: 9,
  },
  dayText: {
    color: COLORS.blue,
    fontSize: 15,
    fontWeight: "500",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  monthText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.blue,
  },
});

export default CalendarHeatmap;
