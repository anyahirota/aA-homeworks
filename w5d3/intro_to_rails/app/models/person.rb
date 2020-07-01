class Person < ApplicationRecord
    validate :name, presence: true
    validate :house_id, presence: true
end