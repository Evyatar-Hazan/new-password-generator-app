export enum IconsEnum {
  PrivacyPolicy = 'PrivacyPolicy',
  AboutTheApp = 'AboutTheApp',
  ActiveEnter = 'ActiveEnter',
  DisabledEnter = 'DisabledEnter',
  Back = 'Back',
  Copy = 'Copy',
  PasswordLength = 'PasswordLength',
  Menu = 'Menu',
  AboutUs = 'AboutUs',
  DarkMode = 'DarkMode',
  Down = 'Down',
  Language = 'Language',
  PrivacyPolicyNotice = 'PrivacyPolicyNotice',
  SecurityKey = 'SecurityKey',
  Settings = 'Settings',
  ShareApp = 'ShareApp',
}

export const iconsMap = {
  //Heder
  Menu: {
    d: 'M96-199v-121h768v121H96Zm0-221v-121h768v121H96Zm0-221v-121h768v121H96Z',
    width: 24,
    height: 24,
  },
  Back: {
    d: 'M363-214 96-480l267-266 84 85.5-120 120h537v121H327l120 120-84 85.5Z',
    width: 24,
    height: 24,
  },
  //Footer
  ActiveEnter: {
    d: 'M419.5-285.5 710-576l-64.5-64.5-226 226-110-110L246-460l173.5 174.5ZM480.2-60q-87.11 0-163.75-32.85-76.65-32.84-133.72-90.01-57.06-57.17-89.9-133.54Q60-392.77 60-479.8q0-88.11 32.85-164.75 32.84-76.65 89.85-133.52 57.01-56.87 133.46-89.9Q392.6-901 479.71-901q88.2 0 164.97 33.09 76.77 33.08 133.56 89.8 56.79 56.72 89.77 133.27Q901-568.29 901-480.06q0 87.24-33.04 163.87-33.05 76.63-90.02 133.58-56.97 56.94-133.34 89.78Q568.23-60 480.2-60Zm-.23-91.5q136.53 0 232.53-95.84t96-232.63q0-136.53-95.97-232.53-95.96-96-233-96-136.03 0-232.03 95.97-96 95.96-96 233 0 136.03 95.84 232.03t232.63 96ZM480-480Z',
    width: 48,
    height: 48,
  },
  DisabledEnter: {
    d: 'M480.2-60q-87.11 0-163.75-32.85-76.65-32.84-133.72-90.01-57.06-57.17-89.9-133.54Q60-392.77 60-479.8q0-88.11 32.85-164.75 32.84-76.65 89.85-133.52 57.01-56.87 133.46-89.9Q392.6-901 479.71-901q88.2 0 164.97 33.09 76.77 33.08 133.56 89.8 56.79 56.72 89.77 133.27Q901-568.29 901-480.06q0 87.24-33.04 163.87-33.05 76.63-90.02 133.58-56.97 56.94-133.34 89.78Q568.23-60 480.2-60Zm-.23-91.5q136.53 0 232.53-95.84t96-232.63q0-136.53-95.97-232.53-95.96-96-233-96-136.03 0-232.03 95.97-96 95.96-96 233 0 136.03 95.84 232.03t232.63 96ZM480-480Z',
    width: 48,
    height: 48,
  },
  PasswordLength: {
    d: 'M86-8.5v-181h788v181H86Zm164-346h36.5L582-649l-18.35-18.86-18.15-18.64-295.5 296v36Zm-90 90v-164L609-878q14-14 29.27-20 15.28-6 32.13-6 16.88 0 33.24 6.5 16.36 6.5 29.75 19.32l40.22 37.81Q787-827 793.5-810.14t6.5 33.64q0 17.18-5.96 33.02-5.95 15.84-19.54 29.48L324-264.5H160ZM709-776l-36.5-37.5L709-776ZM582-649l-18.35-18.86-18.15-18.64L582-649Z',
    width: 24,
    height: 24,
  },
  //Hub
  Copy: {
    d: 'M390-229q-47.64 0-80.32-32.68Q277-294.36 277-342v-456q0-47.64 32.68-80.32Q342.36-911 390-911h360q47.64 0 80.32 32.68Q863-845.64 863-798v456q0 47.64-32.68 80.32Q797.64-229 750-229H390Zm0-113h360v-456H390v456ZM210-49q-47.64 0-80.32-32.68Q97-114.36 97-162v-569h113v569h473v113H210Zm180-293v-456 456Z',
    width: 20,
    height: 20,
  },
  //Menu
  PrivacyPolicy: {
    d: 'm439-332 231-231-64.5-64.5L439-461l-85-84-63.5 63.5L439-332Zm41 277Q330.14-92.01 232.57-223.65 135-355.28 135-516v-260.46L480-905l345 128.54V-516q0 160.72-97.57 292.35Q629.86-92.01 480-55Zm0-124.5q95.5-39 159.75-130.6Q704-401.71 704-515.54v-177.07L480-776l-224 83.87V-516q0 114.29 64.25 205.9Q384.5-218.5 480-179.5Zm0-298Z',
    width: 24,
    height: 24,
  },
  AboutTheApp: {
    d: 'M479.89-263q22.49 0 37.8-15.21Q533-293.41 533-315.89 533-338 517.79-354q-15.2-16-37.68-16t-37.8 15.89q-15.31 15.9-15.31 38 0 22.11 15.21 37.61 15.2 15.5 37.68 15.5ZM434.5-412h91v-282h-91v282ZM320-95 95-319.76V-640l224.76-225H640l225 224.76V-320L640.24-95H320Zm50.68-121H589.5L744-370.68V-589.5L589.32-744H370.5L216-589.32v218.82L370.68-216ZM480-480Z',
    width: 24,
    height: 24,
  },
  AboutUs: {
    d: 'M470-164q4 0 7.75-1.25T487-172l310-310q19.5-19.5 29.5-39.25t10-44.25q0-26-9-47.75t-27-40.25L682-772q-13-13-31.5-18t-36.5-5q-17 0-37.25 9.25T545.5-767.5l3.5-2.5 63 63.5q19.5 20.5 29 43.25t9.5 50.75q0 52-36.25 88.75T526-487q-27 0-50-9.5T432.5-526L366-590 218.5-443.5q-4 4-6 8.5t-2 8.5q0 8 5.5 13.25t13.5 5.25q4 0 9.5-2.75t7.5-5.25l120-119 53 53L300-363q-4.5 4.5-6.25 9.25T292-345q0 8.5 4.75 13.25T310-327q4.5 0 9.75-3t8.25-5l117-117.5 53 53-119.5 119q-3 3.5-5.5 8.25t-2.5 8.75q0 8.5 5.25 13.75t13.75 5.25q4 0 8.5-2t8.5-6l119-119.5 53 53-119 119q-4 4-6 9t-2 9q0 8.5 5 13.25T470-164Zm.5 106q-41 0-74.75-24.25T354-146q-30-7-52.5-29.5T272-228q-29-8-50.5-29T192-307q-36-8.5-62.75-43t-26.75-77.5q0-25 9.25-47.5T139-516l226.5-227 141 141q5 4.5 9.5 6.75t9.5 2.25q8 0 13.25-5.75T544-613q0-4-2.5-10.5T536-632L393-775q-9.5-10-28.25-15T326-795q-20 0-37.75 4t-28.75 15l-118 117.5Q134-651 129-635.75T124-599q0 12 3.5 20t6 15l-76 76q-16-17-27.5-48.25T18.5-599q0-39 10-71.75T65-730l122-123q23.5-24 61-36t78-12q41 0 77.75 14t62.75 38l3 2 2-2q24.5-22 63.5-37t79-15q44 0 82 16.5t62 40.5l126.5 125.5q28.5 28.5 42.75 68.75T941.5-566q0 43-16.5 83.5T876.5-410l-316 315.5q-19 19-41.25 27.75T470.5-58ZM320-656.5Z',
    width: 24,
    height: 24,
  },
  DarkMode: {
    d: 'M380.5-382q-21.5-21.5-40.53-45.28-19.03-23.79-36.47-49.22-.5 1.5-1.25 3t-.75 3.5q4 68.04 51.73 116.27Q400.96-305.5 469-301.5q2 0 3.52-.5 1.51-.5 2.98-1.5-25.61-17.59-49.56-37.29Q402-360.5 380.5-382Zm86.5-84q55 55 122.5 91.75t146 52.75Q694-255 626.78-217.25T481-179.5q-124.96 0-212.73-87.77T180.5-480q0-78.56 37.75-145.78T322.5-734.5q16 78.5 52.75 146T467-466Zm300.5 74.5q-30.5-5-59.82-14.05-29.33-9.05-57.18-22.45 4.5-12.5 6.75-25.75T659.5-480q0-75.04-52.23-127.27Q555.04-659.5 480-659.5q-12.5 0-26 1.75t-26 6.25q-13.58-27.83-22.29-56.17Q397-736 392.5-766.5q21-7.5 43.5-10.75t45-3.25q124.96 0 212.73 87.77T781.5-480q0 22.5-3.25 45t-10.75 43.5Zm-348-474v-115h121v115h-121Zm0 886v-115h121v115h-121Zm375.5-729L709.5-795l81.5-81.5 85.5 85.5-81.5 82.5Zm-626 625L83.5-169l81.5-82.5 85.5 86.5L169-83.5Zm696.5-336v-121h115v121h-115Zm-886 0v-121h115v121h-115ZM791-83.5 709.5-164l86.5-85.5 80.5 80.5L791-83.5Zm-626-626L83.5-791l85.5-85.5 82.5 81.5-86.5 85.5ZM380.5-382Z',
    width: 24,
    height: 24,
  },
  Down: {
    d: 'M480-317 214-583l85-84 181 181 181-181 85 84-266 266Z',
    width: 24,
    height: 24,
  },
  Language: {
    d: 'M479.76-56q-87.26 0-164.31-33.66t-134.59-91.2q-57.54-57.54-91.2-134.59Q56-392.5 56-479.76 56-567 89.66-644.17t91.2-134.8q57.54-57.62 134.59-91.32Q392.5-904 479.76-904q87.24 0 164.41 33.71t134.8 91.35q57.62 57.64 91.32 134.83Q904-566.92 904-480q0 87.5-33.71 164.55-33.7 77.05-91.32 134.59-57.63 57.54-134.8 91.2Q567-56 479.76-56ZM478-175q22.61-34.79 42.05-74.14Q539.5-288.5 551.5-331h-144q12 42.5 29.95 81.86Q455.39-209.79 478-175Zm-93-17q-21-32.5-33.25-68.25T330.41-331H217.5q26 49.5 69 85.25T385-192Zm187 0q55.5-18 99.5-53.75t70-85.25H628.59q-9.09 35-22.34 70.75T572-192ZM187.5-403H315q-3-20.5-4.5-39t-1.5-38q0-20.5 1.5-38.5T315-557H187.5q-5.5 19.5-8 37.84Q177-500.83 177-480q0 19.83 2.5 38.66 2.5 18.84 8 38.34Zm203 0h178q3.5-20.5 4-38.84.5-18.33.5-38.16 0-20.83-.5-38.66-.5-17.84-4-38.34h-178q-3.5 20.5-5 38.34Q384-500.83 384-480q0 19.83 1.5 38.16 1.5 18.34 5 38.84Zm253.5 0h126.5q5.5-19.5 8-38.34Q781-460.17 781-480q0-20.83-2.5-39.16-2.5-18.34-8-37.84H644q2 20.5 3 38.5t1 38.5q0 19.5-1 38t-3 39Zm-15.41-227H741.5q-26-49.5-70-84.75T572-768q21 32.5 34.25 67.75T628.59-630Zm-221.09 0h144q-11-42.5-30.45-81.36Q501.61-750.21 478-785q-22.61 34.79-40.55 73.64Q419.5-672.5 407.5-630Zm-190 0h112.91q9.09-35 21.34-70.25T385-768q-55.5 18-98.5 53.25t-69 84.75Z',
    width: 24,
    height: 24,
  },
  PrivacyPolicyNotice: {
    d: 'M441.83-502.83h76.67V-718.5h-76.67v215.67ZM480-368.5q16.23 0 27.37-11.3 11.13-11.3 11.13-26.87 0-16.23-11.13-27.36-11.14-11.14-27.37-11.14-15.57 0-26.87 11.14-11.3 11.13-11.3 27.36 0 15.57 11.3 26.87T480-368.5Zm0 176.17q121.83-110.84 180.92-195.75Q720-473 720-554.5q0-108.13-69.53-176.73-69.54-68.6-170.51-68.6-100.96 0-170.46 68.6Q240-662.63 240-554.5q0 81.5 60.08 165.92Q360.17-304.17 480-192.33Zm0 133.66Q308.5-202.5 223.58-319.75 138.67-437 138.67-554.5q0-158.39 103.17-252.86Q345.01-901.83 480-901.83t238.5 94.47Q822-712.89 822-554.5q0 117.5-85.25 234.75T480-58.67ZM480-560Z',
    width: 35,
    height: 35,
  },
  SecurityKey: {
    d: 'M283-216q-109.08 0-186.54-77.44T19-479.94Q19-589 96.46-666.5T283-744q78.69 0 140.59 41.25Q485.5-661.5 512-609h429v258h-79v119H602v-119h-90q-26.5 52.5-88.41 93.75Q361.69-216 283-216Zm0-106q72.5 0 111.82-46.16Q434.14-414.33 438-456h270.23v119H756v-119h79v-48H438q-3.86-41.67-43.18-87.84Q355.5-638 283-638q-65.5 0-111.75 46.25T125-480q0 65.5 46.25 111.75T283-322Zm.11-67q38.39 0 64.64-26.86Q374-442.71 374-480.11q0-38.39-26.36-64.64Q321.29-571 282.89-571q-37.39 0-64.14 26.36Q192-518.29 192-479.89q0 37.39 26.86 64.14Q245.71-389 283.11-389Zm-.11-91Z',
    width: 24,
    height: 24,
  },
  Settings: {
    d: 'm346.5-56-18-136q-5.5-2-12-5.25T305-203.5l-125.5 53-135-236 109-82.5v-11q0-2 .25-5t.25-8L44.5-574.5l135-233 129 53q4-3 8.25-5.5t11.75-5.5l18-139.5h267l18 138q6 2.5 11.25 5.25T653-754.5l127.5-53 135 233-113 83.54V-480q0 4.5-.5 6.67-.5 2.18 0 4.83l112 82-136 236-127-54q-3.5 2.5-6.75 5T631.5-192l-18 136h-267Zm104.79-121H506l15.5-104.5q31-8 58.5-23.25T629-346l98.5 42 26.5-49-84-63q4.5-16 7.5-31.84t3-32.16q0-16.5-2.75-31.75T670-544l86-64-27.5-49-99 43Q610-638 581-655t-59.5-23.5L508.57-784H451l-11.5 104q-35 7.5-62 22.75T326-615l-95.5-42-27.5 49 81.5 60.5q-5 18-8 34t-3 32.97q0 16.03 2.75 32.53t7.75 35l-81 60 27.58 49 94.92-41q24.5 25.5 53.25 41.5T439.5-280l11.79 103Zm25.44-168q55.77 0 95.27-39.55 39.5-39.55 39.5-95.5t-39.54-95.45Q532.43-615 476.5-615q-55.5 0-95.25 39.55t-39.75 95.5q0 55.95 39.75 95.45t95.48 39.5Zm2.77-135.5Z',
    width: 24,
    height: 24,
  },
  ShareApp: {
    d: 'M678.53-56q-61.03 0-103.78-42.44T532-201.5q0-7 2.5-19l-244-141Q272-348 249.73-340q-22.28 8-47.73 8-60.83 0-103.42-42.93Q56-417.85 56-479.18 56-540.5 98.58-584q42.59-43.5 103.42-43.5 25.5 0 48.59 8.23 23.1 8.24 42.41 22.77l240.5-139.08q-1-4.92-1.25-10.92t-.25-11q0-61.04 42.72-103.77T678.47-904q61.03 0 103.78 42.75Q825-818.51 825-757.44q0 61.27-42.73 104.11-42.73 42.83-103.77 42.83-27.63 0-51.81-9.5-24.18-9.5-43.69-26.5l-236 135q2 8.55 2.75 16.27.75 7.73.75 16.09t-1 16.75q-1 8.39-3 16.33L581-310.5q19.51-18 44.33-28.5 24.81-10.5 53.17-10.5 61.04 0 103.77 43.03T825-201.97q0 61.47-42.72 103.72T678.53-56Zm-.64-111q14.82 0 25.47-10.23Q714-187.46 714-202.59q0-14.91-10.49-25.41-10.5-10.5-26.01-10.5-14.66 0-24.58 11-9.92 11-9.92 25t10.03 24.75Q663.06-167 677.89-167Zm-475.8-276q14.91 0 26.16-10.43 11.25-10.44 11.25-25.86 0-15.21-11.14-26.21-11.15-11-26.27-11-14.91 0-25 10.79t-10.09 26q0 15.21 10.09 25.96t25 10.75ZM678.5-721.5q14.21 0 24.36-10.39 10.14-10.38 10.14-25 0-14.61-10.03-25.36T678.11-793q-14.82 0-25.47 10.49Q642-772.01 642-756.5q0 14.45 11.14 24.72 11.15 10.28 25.36 10.28Zm1 518.5Zm-476-277Zm475-277.5Z',
    width: 24,
    height: 24,
  },
};