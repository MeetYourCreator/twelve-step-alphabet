class AddMeetingToReviews < ActiveRecord::Migration[6.0]
  def change
    add_reference :reviews, :meeting, null: false, foreign_key: true
  end
end
