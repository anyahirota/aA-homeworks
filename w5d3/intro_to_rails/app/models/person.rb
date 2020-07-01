class Person < ApplicationRecord
    # validate :name, presence: true
    # validate :house_id, presence: true

    belongs_to(
    :house,
    class_name: 'House',
    foreign_key: :house_id,
    primary_key: :id
  )
end