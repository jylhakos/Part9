import entries from '../../data/entries';

import { NonSensitiveDiaryEntry, DiaryEntry } from '../types'

const getEntries = (): Array<DiaryEntry> => {
  return entries;
}

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry [] => {
  return entries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addEntry = () => {
  return null;
}

export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry
};