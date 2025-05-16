import { motion } from 'framer-motion';
import Image38 from '../assets/Image-38.png';
import Image41 from '../assets/Image-41.png';
import useWindowSize from '../hooks/useWindowSize';
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
  const { width } = useWindowSize();
  return (
    <div className="stories-section">
      <ShortCouple />

      <div className="stories-container">
        <div className="stories-header">
          <h2 className="link-service w-inline-block heading-service">Câu chuyện của chúng mình</h2>
          <p className="paragraph-service">Những dấu mốc đáng nhớ trên hành trình yêu thương</p>
        </div>
        <div className="stories-timeline">
          {stories.map((story) => (
            <motion.div
              key={story.date}
              className={'story-item'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <div className="story-date">{story.date}</div>
              <motion.img
                src={Image38}
                className="story-flower-1"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: '-100px', amount: 'some' }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: 'easeOut',
                  scale: {
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    duration: 0.6, // Longer duration for scale
                  },
                }}
                style={{ rotate: 50 }} // Move the rotation to inline style
              />
              <motion.img
                src={Image41}
                className="story-flower-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.9, scale: 1 }}
                viewport={{ once: false, margin: '-100px', amount: 'some' }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: 'easeOut',
                  scale: {
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    duration: 0.6, // Longer duration for scale
                  },
                }}
                style={{ rotate: width > 767 ? 37 : -12 }} // Move the rotation to inline style
              />

              <div className="story-content">
                <motion.div
                  className="story-content__left"
                  initial={
                    width > 767
                      ? { x: '-100%', opacity: 0, y: 0, scale: 0.7 }
                      : { x: 0, opacity: 0, y: 50, scale: 0.7 }
                  }
                  whileInView={{ x: 0, opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 'some' }}
                  transition={{
                    duration: 1,
                    ease: 'anticipate',
                    opacity: { duration: 0.6 },
                  }}
                >
                  <img
                    src={
                      'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg'
                    }
                    alt={story.title}
                  />
                </motion.div>
                <motion.div
                  className="story-content__right"
                  initial={
                    width > 767
                      ? { x: '100%', opacity: 0, y: 0, scale: 0.2 }
                      : { x: 0, opacity: 0, y: 50, scale: 0.7 }
                  }
                  whileInView={{ x: 0, opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 'some' }}
                  transition={{
                    duration: 0.6,
                    ease: 'anticipate',
                    opacity: { duration: 0.6 },
                  }}
                >
                  <div className="story-content__right-wrapper">
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-description">{story.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;
