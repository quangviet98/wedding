import Image38 from '../assets/Image-38.png';
import Image41 from '../assets/Image-41.png';
import ShortCouple from './ShortCouple';
import './Stories.scss';

interface StoryItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const stories: StoryItem[] = [
  {
    date: '15/01/2022',
    title: 'Lần đầu gặp gỡ',
    description:
      'Một cuộc hẹn đầu tiên đầy bất ngờ và thú vị, khi cả hai còn chưa biết đây sẽ là khởi đầu của một câu chuyện đẹp.',
  },
  {
    date: '20/02/2022',
    title: 'Chính thức hẹn hò',
    description:
      'Sau những buổi hẹn hò ngọt ngào, chúng mình quyết định trao nhau cơ hội để hiểu nhau nhiều hơn.',
  },
  {
    date: '15/03/2025',
    title: 'Đồng hành cùng nhau',
    description:
      'Ba năm bên nhau, có lúc như phim tình cảm, có lúc như phim hành động. Nhưng cuối cùng, cả hai vẫn chọn đồng hành - vì chẳng ai chịu rời rạp trước khi phim happy ending!',
  },
];

function Stories() {
  return (
    <div className="stories-section">
      <ShortCouple />

      <div className="stories-container">
        <div className="stories-header">
          <h2 className="link-service w-inline-block heading-service">Câu chuyện của chúng mình</h2>

          {/* <h2 className="section-title">Câu chuyện của chúng mình</h2> */}
          <p className="paragraph-service">Những dấu mốc đáng nhớ trên hành trình yêu thương</p>
        </div>
        <div className="stories-timeline">
          {stories.map((story, index) => (
            <div
              key={story.date}
              className={'story-item'}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="story-date">{story.date}</div>
              <img src={Image38} className="story-flower-1" />
              <img src={Image41} className="story-flower-2" />

              <div className="story-content">
                <div className="story-content__left">
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg'
                    }
                    alt={story.title}
                  />
                </div>
                <div className="story-content__right">
                  <div className="story-content__right-wrapper">
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-description">{story.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;
