import React from 'react';
import { useTranslation } from 'react-i18next';

export const RTLTest = (): JSX.Element => {
  const { i18n } = useTranslation();

  const testItems = [
    'Item 1',
    'Item 2', 
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ];

  const reversedItems = i18n.language === 'ar' ? [...testItems].reverse() : testItems;

  return (
    <div className={`p-4 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h3 className="mb-4">RTL Test - Current Language: {i18n.language}</h3>
      
      {/* Test with flex-row-reverse */}
      <div className={`flex mb-4 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
        {testItems.map((item, index) => (
          <div key={index} className="w-20 h-10 bg-blue-200 border border-blue-400 flex items-center justify-center text-xs">
            {item}
          </div>
        ))}
      </div>

      {/* Test with reversed array */}
      <div className="flex mb-4">
        {reversedItems.map((item, index) => (
          <div key={index} className="w-20 h-10 bg-green-200 border border-green-400 flex items-center justify-center text-xs">
            {item}
          </div>
        ))}
      </div>

      {/* Test with both */}
      <div className={`flex ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
        {reversedItems.map((item, index) => (
          <div key={index} className="w-20 h-10 bg-red-200 border border-red-400 flex items-center justify-center text-xs">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}; 