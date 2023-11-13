import { NotFound } from 'components/NotFound';
import { ReviewItem } from 'components/Reviews/ReviewItem';

export const ReviewList = ({ info }) => {
  return (
    <ul>
      {info.length !== 0 ? (
        info.map(item => (
          <ReviewItem key={item.id} name={item.author} content={item.content} />
        ))
      ) : ( <NotFound />)}
    </ul>
  );
};
