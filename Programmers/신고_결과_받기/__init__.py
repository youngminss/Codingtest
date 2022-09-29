def solution(id_list, report, k):
    users = {}
    user_reported = {}

    # 유저 딕셔너리 초기화
    for user_id in id_list:
        users[user_id] = {"report_target_ids": [], "notification_count_about_report": 0}

    # 유저들의 신고당한 횟수 객체 초기화
    for user_id in id_list:
        user_reported[user_id] = 0

    # 유저 신고발생 처리
    for user_ids in report:
        [report_user_id, reported_user_id] = user_ids.split(" ")

        if not reported_user_id in users[report_user_id]["report_target_ids"]:
            users[report_user_id]["report_target_ids"].append(reported_user_id)
            user_reported[reported_user_id] = user_reported[reported_user_id] + 1

    # 정지대상 유저 추출
    stop_target_user_ids = [
        id
        for id, notification_count_about_report in user_reported.items()
        if notification_count_about_report >= k
    ]

    # 각 유저별 처리 결과 메일 받는 횟수 처리
    for user_id in id_list:
        for report_target_id in users[user_id]["report_target_ids"]:
            if report_target_id in stop_target_user_ids:
                users[user_id]["notification_count_about_report"] = (
                    users[user_id]["notification_count_about_report"] + 1
                )

    # 입력받은 유저 순서대로 결과 메일 받는 횟수 배열 반환
    return [user["notification_count_about_report"] for _, user in users.items()]


# 입력부
# solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)   # [2, 1, 1, 0]
# solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)  # [0, 0]
