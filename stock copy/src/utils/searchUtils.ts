import { isString } from 'lodash';

export function getSearchResults(dataSource: any, text: string) {
  const searchText = formatTextToLatin(text.toUpperCase());
  let searchResults: any = [];
  dataSource.forEach((data: any) => {
    const item: any = getFormattedTask(data);
    Object.keys(item).some((key: any) => {
      let normalisedText = '';
      if (isString(item[key])) {
        normalisedText = formatTextToLatin(item[key].toUpperCase());
      } else {
        normalisedText = item[key];
      }
      if (
        isString(normalisedText) &&
        normalisedText.toUpperCase().includes(searchText.toUpperCase())
      ) {
        return searchResults.push(data);
      }
    });
  });
  const sortedSearchResults = searchResults.sort((a: any, b: any) => {
    // Sorting search results alphabetically
    const customerA = formatTextToLatin(a.name).toUpperCase();
    const customerB = formatTextToLatin(b.name).toUpperCase();
    // return customerA < customerB ? -1 : customerA > customerB ? 1 : 0;
    // Sorting search results by search index
    return (
      customerA.indexOf(searchText.toUpperCase()) -
      customerB.indexOf(searchText.toUpperCase())
    );
  });
  return sortedSearchResults;
}

const getFormattedTask = (customer: any) => {
  return {
    phone: customer.phoneNumber,
    name: customer.name,
  };
};

export const formatTextToLatin = (text: string) => {
  let targetText = text;
  const vietnamese = [
    'à',
    'á',
    'ạ',
    'ả',
    'ã',
    'â',
    'ầ',
    'ấ',
    'ậ',
    'ẩ',
    'ẫ',
    'ă',
    'ằ',
    'ắ',
    'ặ',
    'ẳ',
    'ẵ',
    'è',
    'é',
    'ẹ',
    'ẻ',
    'ẽ',
    'ê',
    'ề',
    'ế',
    'ệ',
    'ể',
    'ễ',
    'ì',
    'í',
    'ị',
    'ỉ',
    'ĩ',
    'ò',
    'ó',
    'ọ',
    'ỏ',
    'õ',
    'ô',
    'ồ',
    'ố',
    'ộ',
    'ổ',
    'ỗ',
    'ơ',
    'ờ',
    'ớ',
    'ợ',
    'ở',
    'ỡ',
    'ù',
    'ú',
    'ụ',
    'ủ',
    'ũ',
    'ư',
    'ừ',
    'ứ',
    'ự',
    'ử',
    'ữ',
    'ỳ',
    'ý',
    'ỵ',
    'ỷ',
    'ỹ',
    'đ',
    'À',
    'Á',
    'Ạ',
    'Ả',
    'Ã',
    'Â',
    'Ầ',
    'Ấ',
    'Ậ',
    'Ẩ',
    'Ẫ',
    'Ă',
    'Ằ',
    'Ắ',
    'Ặ',
    'Ẳ',
    'Ẵ',
    'È',
    'É',
    'Ẹ',
    'Ẻ',
    'Ẽ',
    'Ê',
    'Ề',
    'Ế',
    'Ệ',
    'Ể',
    'Ễ',
    'Ì',
    'Í',
    'Ị',
    'Ỉ',
    'Ĩ',
    'Ò',
    'Ó',
    'Ọ',
    'Ỏ',
    'Õ',
    'Ô',
    'Ồ',
    'Ố',
    'Ộ',
    'Ổ',
    'Ỗ',
    'Ơ',
    'Ờ',
    'Ớ',
    'Ợ',
    'Ở',
    'Ỡ',
    'Ù',
    'Ú',
    'Ụ',
    'Ủ',
    'Ũ',
    'Ư',
    'Ừ',
    'Ứ',
    'Ự',
    'Ử',
    'Ữ',
    'Ỳ',
    'Ý',
    'Ỵ',
    'Ỷ',
    'Ỹ',
    'Đ',
  ];
  const latin = [
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'i',
    'i',
    'i',
    'i',
    'i',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'o',
    'u',
    'u',
    'u',
    'u',
    'u',
    'u',
    'u',
    'u',
    'u',
    'u',
    'u',
    'y',
    'y',
    'y',
    'y',
    'y',
    'd',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'E',
    'E',
    'E',
    'E',
    'E',
    'E',
    'E',
    'E',
    'E',
    'E',
    'E',
    'I',
    'I',
    'I',
    'I',
    'I',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'U',
    'U',
    'U',
    'U',
    'U',
    'U',
    'U',
    'U',
    'U',
    'U',
    'U',
    'Y',
    'Y',
    'Y',
    'Y',
    'Y',
    'D',
  ];
  vietnamese.forEach(
    (charWithAccent, index) =>
      (targetText = targetText.replace(
        new RegExp(charWithAccent, 'g'),
        latin[index],
      )),
  );
  return targetText;
};