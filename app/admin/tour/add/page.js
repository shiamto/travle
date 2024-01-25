"use client";
import React, { useState } from 'react';
import { Form, Row, Col, Button, TimePicker, Card } from 'antd';
import FormImage from '../../../components/common/image';
import { FiTrash } from 'react-icons/fi';
import FormInput, { HiddenInput } from '../../../components/form/input';
import FormDatePicker from '../../../components/form/date_picker';
import { useAction, useFetch } from '../../../helpers/hooks';
import { fetchAdminTourList, postAdminTour } from '../../../helpers/backend';
import TextEditor from '../../../components/form/editor';
import dayjs from 'dayjs';
import FormSelect from '../../../components/form/select';
dayjs().format();


const TourPage = () => {
	const [form] = Form.useForm()
	const [tourData, getTourData] = useFetch(fetchAdminTourList)
	console.log("🚀 ~ TourPage ~ tourData:", tourData)

	return (
		<div className="">
			<div className=''>
				<Form form={form} layout='vertical' onFinish={(values) => {
					console.log("🚀 ~ LandingPage ~ values:", values)
					const data = {
						name: values.name,
						duration: values.duration,
						explorer: values.explorer,
						duration_details: JSON.stringify(values.duration_details),
						locations: values?.locations?.map((location) => location),
						min_day: values.min_day,
						start_end_city: values.start_end_city,
						start_price: values.start_price,
						discount: values.discount,
						is_percentage_discount: values.is_percentage_discount,
						highlights: values.highlights,
						notes: values.notes,
						hotels: values?.hotels?.map((hotel) => hotel),
						hotel_notes: values.Hotel_notes,
						images: values?.images?.map((image) => image?.id),
						places: values?.places?.map((place) => {
							return {
								name: place?.name,
								image_id: place?.image_id?.filter((image) => image?.id)[0]?.id
							}
						}),
						destinations: values?.destinations?.map((destination) => destination),
						itineraries: values?.itineraries?.map((itinerary) => {
							return {
								month: itinerary?.month,
								image: itinerary?.image[0]?.id,
								dates: itinerary?.dates?.map((date) => {
									return {
										departure_place: date?.departure_place,
										from: dayjs(date?.from).format('YYYY-MM-DD'),
										to: dayjs(date?.to).format('YYYY-MM-DD'),
										days: date?.days
									}
								})
							}
						}),
						plans: values?.plans?.map((plan) => plan),
						departures: values?.departures?.map((departure) => {
							return {
								from: dayjs(departure?.from).format('YYYY-MM-DD'),
								to: dayjs(departure?.to).format('YYYY-MM-DD'),
								time: dayjs(departure?.time).format('HH:mm')
							}
						}),
						facilities: values?.facilities?.map((facility) => facility),

					}
					console.log("🚀 ~ TourPage ~ data:", data)

					return useAction(postAdminTour, { ...data }, () => {
						getTourData()
					})
				}}>

					{/* Hero Section */}


					<h1 className='text-2xl font-bold'>Add Tour</h1>
					<Card className='mt-4'>
						<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
							<HiddenInput name={['id']} />
							<div className=''>
								<FormInput name={['name']} label="Name" />

							</div>

							<div className=''>
								<FormInput name={['duration']} label="Duration" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Duration Cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Duration should be number"))
											}
											return Promise.resolve()
										}
									})
								]} />
							</div>

							<div className=''>
								<FormInput name={['explorer']} label="Explorer" />
							</div>
						</div>

						<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
							<div className=''>
								<Form.Item name={['duration_details', 'days']} label="Total Days" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Days cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Days should be number"))
											}
											return Promise.resolve()
										}
									})
								]}>
									<FormInput />
								</Form.Item>
							</div>

							<div className=''>
								<Form.Item name={['duration_details', 'countries']} label="How Many Countries" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Countries Cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Country should be number"))
											}
											return Promise.resolve()
										}
									})
								]}>
									<FormInput />
								</Form.Item>
							</div>

							<div className=''>
								<Form.Item name={['duration_details', 'cities']} label="How Many Cities" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Cities Cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Cities should be number"))
											}
											return Promise.resolve()
										}
									})
								]}>
									<FormInput />
								</Form.Item>
							</div>

						</div>
					</Card>


					<div className='grid grid-cols-2 gap-5' >
						<Card className='mt-4'>
							<Form.List label="Locations" name={['locations']}>
								{(fields, { add, remove }) => (
									<>
										{fields.map(({ key, name }) => (
											<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

												<div className="col-span-1">
													<Form.Item
														name={[name]}
														label="Location"
													>
														<FormInput />
													</Form.Item>
												</div>
												<div className="col-span-1">
													<FiTrash
														onClick={() => remove(name)}
														className=" text-secondary cursor-pointer"
														role="button" size={18}
														title='Remove file'
													/>
												</div>
											</div>
										))}
										<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Location</Button>
									</>
								)}
							</Form.List>
						</Card>
						<Card className='mt-4'>
							<Form.Item name="facilities" label="Facilities">
								<FormSelect
									options={[
										{ label: 'Wifi', value: 'Wifi' },
										{ label: 'Air Condition', value: 'Air Condition' },
										{ label: 'Breakfast', value: 'Breakfast' },
										{ label: 'Lunch', value: 'Lunch' },
										{ label: 'Dinner', value: 'Dinner' },
										{ label: 'Transportation', value: 'Transportation' },
										{ label: 'Guide', value: 'Guide' },
										{ label: 'Entrance Fees', value: 'Entrance Fees' },
										{ label: 'Taxes', value: 'Taxes' },
										{ label: 'Visa', value: 'Visa' },
										{ label: 'Insurance', value: 'Insurance' },
										{ label: 'Flight', value: 'Flight' },
										{ label: 'Train', value: 'Train' },
										{ label: 'Boat', value: 'Boat' },
										{ label: 'Cruise', value: 'Cruise' },
									]}
									multi={true}
								/>
							</Form.Item>
						</Card>
					</div>

					<Card className='mt-4' >
						<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
							<div>
								<Form.Item name={['min_day']} label="Min Day" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Day Cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Day should be number"))
											}
											return Promise.resolve()
										}
									})
								]}>
									<FormInput />
								</Form.Item>
							</div>

							<div>
								<Form.Item name={['start_end_city']} label="Start & End City">
									<FormInput />
								</Form.Item>
							</div>

							<div>
								<Form.Item name={['start_price']} label="Start Price" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Price Cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Price should be number"))
											}
											return Promise.resolve()
										}
									})
								]}>
									<FormInput />
								</Form.Item>
							</div>
						</div>


						<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
							<div>
								<Form.Item name={['offer_name']} label="Offer Name">
									<FormInput />
								</Form.Item>
							</div>

							<div>
								<Form.Item name={['discount']} label="Discount" rules={[
									() => ({
										validator(_, value) {
											if (value && value < 0) {
												return Promise.reject(new Error("Discount Cannot be negative"))
											}
											return Promise.resolve()
										}
									}),
									() => ({
										validator(_, value) {
											if (isNaN(value)) {
												return Promise.reject(new Error("Discount should be number"))
											}
											return Promise.resolve()
										}
									})
								]}>
									<FormInput />
								</Form.Item>
							</div>

							<div>
								<Form.Item name={['is_percentage_discount']} label="Is Percentage Discount">
									<FormInput />
								</Form.Item>
							</div>
						</div>

						<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4'>
							<div>
								<Form.Item name={['highlights']} label="Highlights">
									<TextEditor />
								</Form.Item>
							</div>
							<div>
								<Form.Item name={['notes']} label="Notes">
									<FormInput textArea={true} />
								</Form.Item>
							</div>
						</div>
					</Card>

					<div className='grid grid-cols-2 gap-5' >
						<Card className='mt-4' >
							<div>
								<Form.List label="Hotels" name={['hotels']}>
									{(fields, { add, remove }) => (
										<>
											{fields.map(({ key, name }) => (
												<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

													<div className="col-span-1 mt-4">
														<Form.Item
															name={[name, 'place']}
															label="Place"
														>
															<FormInput />
														</Form.Item>
													</div>

													<div className="col-span-1 mt-4">
														<Form.Item
															name={[name, 'name']}
															label="Name"
														>
															<FormInput />
														</Form.Item>
													</div>

													<div className="col-span-1 mt-4">
														<Form.Item
															name={[name, 'nights']}
															label="Nights"
															rules={[
																() => ({
																	validator(_, value) {
																		if (value && value < 0) {
																			return Promise.reject(new Error("Nights Cannot be negative"))
																		}
																		return Promise.resolve()
																	}
																}),
																() => ({
																	validator(_, value) {
																		if (isNaN(value)) {
																			return Promise.reject(new Error("Nights should be number"))
																		}
																		return Promise.resolve()
																	}
																})
															]}
														>
															<FormInput />
														</Form.Item>
													</div>

													<div className="col-span-1">
														<FiTrash
															onClick={() => remove(name)}
															className="mt-2.5 text-secondary cursor-pointer"
															role="button" size={18}
															title='Remove file'
														/>
													</div>
												</div>
											))}
											<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Hotels</Button>
										</>
									)}
								</Form.List>
							</div>
						</Card>

						<Card className='mt-4' >
							<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4'>
								<div>
									<Form.Item name={'Hotel_notes'} label="Hotel Notes">
										<FormInput textArea={true} />
									</Form.Item>
								</div>

								<div>
									<FormImage name={['images']} label="Images" />

								</div>
							</div>
						</Card>
					</div>

					<div className='grid grid-cols-2 gap-5' >
						<Card className='mt-4' >
							<div>
								<Form.List label="Places" name={['places']}>
									{(fields, { add, remove }) => (
										<>
											{fields.map(({ key, name }) => (
												<div key={key} className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">

													<div className="col-span-1 mt-4">
														<FormImage name={[name, 'image_id']}
															label="Image" />
													</div>

													<div className="col-span-1 mt-4">
														<Form.Item
															name={[name, 'name']}
															label="Name"
														>
															<FormInput />
														</Form.Item>
													</div>

													<div className="col-span-1">
														<FiTrash
															onClick={() => remove(name)}
															className="mt-2.5 text-secondary cursor-pointer"
															role="button" size={18}
															title='Remove file'
														/>
													</div>
												</div>
											))}
											<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Places</Button>
										</>
									)}
								</Form.List>
							</div>
						</Card>

						<Card className='mt-4'>
							<Form.List label="Destinations" name={['destinations']}>
								{(fields, { add, remove }) => (
									<>
										{fields.map(({ key, name }) => (
											<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

												<div className="col-span-1 mt-4">
													<Form.Item
														name={[name, 'name']}
														label="Name"
													>
														<FormInput />
													</Form.Item>
												</div>

												<div className="col-span-1 mt-4">
													<Form.Item
														name={[name, 'lat']}
														label="Lat"
													>
														<FormInput />
													</Form.Item>
												</div>

												<div className="col-span-1 mt-4">
													<Form.Item
														name={[name, 'lng']}
														label="Lng"
													>
														<FormInput />
													</Form.Item>
												</div>

												<div className="col-span-1">
													<FiTrash
														onClick={() => remove(name)}
														className="mt-2.5 text-secondary cursor-pointer"
														role="button" size={18}
														title='Remove file'
													/>
												</div>
											</div>
										))}
										<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Destinations</Button>
									</>
								)}
							</Form.List>
						</Card>
					</div>

					<Card className='mt-4'>
						<Form.List label="Itineraries" name={['itineraries']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-6 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'month']}
													label="month"
												>
													<FormSelect
														options={[
															{ label: 'January', value: 'Jan' },
															{ label: 'February', value: 'Febr' },
															{ label: 'March', value: 'Mar' },
															{ label: 'April', value: 'Apr' },
															{ label: 'May', value: 'May' },
															{ label: 'June', value: 'Jun' },
															{ label: 'July', value: 'Jul' },
															{ label: 'August', value: 'Aug' },
															{ label: 'September', value: 'Sept' },
															{ label: 'October', value: 'Oct' },
															{ label: 'November', value: 'Nov' },
															{ label: 'December', value: 'Dec' },
														]}
													/>
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">

												<FormImage name={[name, 'image']}
													label="Image" />
											</div>

											<div className="col-span-3 mt-4">
												<Form.List label="dates" name={[name, 'dates']}>
													{
														(fields, { add, remove }) => (
															<>
																{fields.map(({ key, name }) => (
																	<div key={key} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">

																		<div className="col-span-1 mt-4">
																			<Form.Item
																				name={[name, 'departure_place']}
																				label="Place"
																			>
																				<FormInput />
																			</Form.Item>
																		</div>

																		<div className="col-span-1 mt-4">
																			<Form.Item
																				name={[name, 'from']}
																				label="From"
																			>
																				<FormDatePicker />
																			</Form.Item>
																		</div>

																		<div className="col-span-1 mt-4">
																			<Form.Item
																				name={[name, 'to']}
																				label="To"
																			>
																				<FormDatePicker />
																			</Form.Item>
																		</div>

																		<div className="col-span-1 mt-4">
																			<Form.Item
																				name={[name, 'days']}
																				label="Days"
																			>
																				<FormInput type={"number"} />
																			</Form.Item>
																		</div>

																		<div className="col-span-1">
																			<FiTrash
																				onClick={() => remove(name)}
																				className=" text-secondary cursor-pointer"
																				role="button" size={18}
																				title='Remove file'
																			/>
																		</div>
																	</div>
																))}
																<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Dates</Button>
															</>
														)
													}
												</Form.List>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className=" text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Itineraries</Button>
								</>
							)}
						</Form.List>
					</Card>

					<Card className='mt-4'>
						<Form.List label="Plans" name={['plans']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">
											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'day']}
													label="Day" rules={[
														() => ({
															validator(_, value) {
																if (value && value < 0) {
																	return Promise.reject(new Error("Day Cannot be negative"))
																}
																return Promise.resolve()
															}
														}),
														() => ({
															validator(_, value) {
																if (isNaN(value)) {
																	return Promise.reject(new Error("Day should be number"))
																}
																return Promise.resolve()
															}
														})
													]}
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.List name={[name, 'meal']} label="Meal">
													{(mealFields, { add, remove }) => (
														<>
															{mealFields.map(({ key, name }) => (
																<>
																	<div key={key} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
																		<Form.Item
																			label="Meal"
																			className='col-span-2'
																		>
																			<FormInput name={[name, 'mealsName']} placeholder="Write something.." required />
																		</Form.Item>
																		<FiTrash
																			onClick={() => remove(name)}
																			className="text-secondary cursor-pointer"
																			role="button" size={18}
																			title='Remove file'
																		/>
																	</div>

																</>
															))}
															<Button
																type="button"
																className='bg-indigo-400 text-white'
																onClick={() => add()}
															>
																Add Meal
															</Button>
														</>
													)}
												</Form.List>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'extra_topping']}
													label="Extra Topping"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'description']}
													label="Description"
												>
													<TextEditor />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Plans</Button>
								</>
							)}
						</Form.List>
					</Card>

					<Card className='mt-4'>
						<Form.List label="Departures" name={['departures']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'from']}
													label="From"
												>
													<FormDatePicker />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'to']}
													label="To"
												>
													<FormDatePicker />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'time']}
													label="Time"
												>
													<TimePicker defaultValue={null} format={'HH:mm'} />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Departures</Button>
								</>
							)}
						</Form.List>
					</Card>

					{/* Submit Button */}
					<Form.Item>
						<Button className='bg-indigo-500 text-white mt-2' type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default TourPage;
